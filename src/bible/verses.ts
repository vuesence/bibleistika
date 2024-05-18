import { api } from "../services/api";
import { getStrongsConcordance } from "../bible/strongs-concordance";

const verses: Map<string, Verse> = new Map();

export async function getVerse(id: string): Promise<Verse> {
  let verse: Verse = verses.get(id);
  if (!verse) {
    await loadVerse(id);
    verse = verses.get(id);
  }
  return Promise.resolve(verse);
}

async function loadVerse(id: string) {
  const data = await api.verses.getVerse(id);
  const t: string = data.translations[0].tokens;
  let tokens: Token[] = [];
  t.split("🞍").forEach((token) => {
    const parts = token.split("₋");
    if (parts.length === 1) {
      tokens.push({ tn: parts[0] });
    } else {
      const sn = parts[1].padStart(4, "0");
      tokens.push({
        tn: parts[0] == "" ? " " : parts[0],
        sn: `H${sn}`,
        originalWord: getStrongsConcordance(`H${sn}`)?.word ?? "?",
      });
    }
  });

  const text = tokens.reduce((text, token) => {
    return text + token.tn;
  }, "");

  verses.set(id, { text, tokens, sourceLang: data.translations[0].sourceLang });

  for (const [key, value] of verses.entries()) {
    console.log(key, value);
  }

  // for (const [key, value] of Object.entries(data)) {
  //   dict.get(key);
  // }
}
