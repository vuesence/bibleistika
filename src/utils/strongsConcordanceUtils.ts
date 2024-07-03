import { api } from "../services/api";
import { rebuildVerseSC } from "./verseUtils";

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
  // sc.value = getSC(props.vid);
  rebuildVerseSC();
  // }, 3000);
}
