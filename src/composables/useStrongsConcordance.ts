import { computed, ref } from "vue";
import { api } from "../services/api";
// import { StrongsConcordance } from "../models/StrongsConcordance";
// import { rebuildVerse } from "../utils/verseUtils";

const loaded = ref(false);
// const sc = ref();

const dict: Map<string, StrongsConcordance> = new Map();
const rawDict: Map<string, string> = new Map();

export function getSC(sn: string): StrongsConcordance | undefined {
  let _sc = dict.get(sn);
  if (!_sc) {
    const data = rawDict.get(sn);
    if (data) {
      _sc = buildSC(sn, data);
      dict.set(sn, _sc);
    }
  }
  return _sc;
}

export function useStrongsConcordance(props) {
  const sc = computed<StrongsConcordance>(() => {
    return loaded.value ? getSC(props.sn) : null;
  });

  return { sc, getSC, loaded };
}

function buildSC(_sn: string, data: string) {
  const cols = data.split("¡");
  return {
    sn: _sn,
    lemma: cols[0],
    tr: cols[1],
    pr: cols[2],
    desc: cols[3],
    f: +cols[4],
  };
}

export async function loadStrongsConcordance() {
  // setTimeout(async () => {
  const data = await api.bible.loadStrongsConcordance();
  data.split("\n").forEach((line: string) => {
    rawDict.set(line.substring(0, 5), line.substring(6));
  });
  loaded.value = true;
  // sc.value = getSC(props.vid);
  // rebuildVerse();
  // }, 3000);
}
