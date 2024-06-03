import { ref, watch } from "vue";
import { api } from "../services/api";
// import { Verse } from "../models/Verse";
import { getSC } from "@/composables/useStrongsConcordance";

const verseCache: Map<string, Verse> = new Map();

const verse = ref<Verse>();

export function rebuildVerse() {
  // verse.value = verseCache.get(verse.value.vid);
  if (verse.value) {
    verse.value = buildVerse(verse.value.data);
    verseCache.set(verse.value.vid, verse.value);
  }
}

export function useVerseUtils(props) {
  watch(
    () => props.vid,
    loadVerse,
    { immediate: true },
  );

  async function loadVerse() {
    verse.value = verseCache.get(props.vid);
    if (!verse.value) {
      const data = await api.bible.loadChapter(props.vid);
      // console.log(data);

      const lines = data.split("\n");
      for (let i = 0; i < lines.length; i++) {
        const [bookId, chapterId] = props.vid.split(":");
        const vid = `${bookId}:${chapterId}:${i + 1}`;
        verseCache.set(
          vid,
          buildVerseFromString(vid, lines[i]),
        );
      }
      verse.value = verseCache.get(props.vid);

      // load by verse
      // const data = await api.bible.loadVerse(props.vid);
      // verse.value = buildVerse(data);
      // verseCache.set(props.vid, verse.value);
    }
  }

  return { verse, loadVerse };
}

export async function loadLemmaOccurrences(sn: string): Promise<Verse[]> {
  const data = await api.bible.loadLemmaOccurrences(sn);
  return buildVerses(data);
}

export async function
loadSearchResults(searchString: string): Promise<Verse[]> {
  const data = await api.bible.loadSearchResults(searchString);
  return buildVerses(data);
}

function buildVerses(data: any): Verse[] {
  const verses: Verse[] = [];
  data.forEach((d) => {
    const v = buildVerse(d);
    verseCache.set(v.vid, v);
    verses.push(v);
  });
  return verses;
}

export function buildVerse(data: any): Verse {
  // const t: string = data.translations[0].tokens;
  const v: Verse = {} as Verse;
  v.tokens = [];
  data.translations[0].tokens.split("🞍").forEach((token) => {
    const parts = token.split("₋");
    if (parts.length === 1) {
      v.tokens.push(buildVerseToken(parts[0]));
    } else {
      const sn = parts[1].padStart(4, "0");
      v.tokens.push(buildVerseToken(parts[0], `H${sn}`));
    }
  });

  v.vid = data.vid;
  v.data = data;
  v.sourceLang = data.translations[0].sourceLang;
  v.translationTitle = data.translations[0].title;
  v.text = v.tokens.reduce((text, token) => {
    return text + token.tr;
  }, "");
  return v;
}
export function buildVerseFromString(vid, data: any): Verse {
  // const t: string = data.translations[0].tokens;

  const v: Verse = {} as Verse;
  v.tokens = [];
  data.split("🞍").forEach((token) => {
    const parts = token.split("₋");
    if (parts.length === 1) {
      v.tokens.push(buildVerseToken(parts[0]));
    } else {
      const sn = parts[1].padStart(4, "0");
      v.tokens.push(buildVerseToken(parts[0], `H${sn}`));
    }
  });

  v.vid = vid;
  // v.data = data;
  v.translationTitle = "Синодальный перевод";
  v.text = v.tokens.reduce((text, token) => {
    return text + token.tr;
  }, "");
  return v;
}

function buildVerseToken(_tn: string, _sn?: string): VerseToken {
  const vt: VerseToken = {
    tr: _tn === "" ? " " : _tn,
  };

  if (_sn) {
    vt.sn = _sn;
    vt.sc = getSC(_sn) ?? null;
    // vt.ow = getSC(_sn)?.lemma ?? "";
  }
  return vt;
}
