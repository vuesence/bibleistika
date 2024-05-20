import strongsConcordance from "../services/api/strongs-concordance";

const dict: Map<string, StrongsConcordance> = new Map();

export function get(key: string) {
  return dict.get(key);
}

export async function load() {
  const data = await strongsConcordance.load();
  const lines = data.split("\n");
  for (const line of lines) {
    const cols = line.split("¡");
    dict.set(cols[0], {
      word: cols[1],
      tr: cols[2],
      pr: cols[3],
      desc: cols[4],
      // desc: cols[4]?.replaceAll("<br>", "\n"),
      f: cols[5],
    });
  }

  // for (const [key, value] of Object.entries(data)) {
  //   dict.get(key);
  // }
}

export default { get, load };
