import { api } from "@/services/api";
import { getSC } from "@/utils/strongsConcordanceUtils";

const verseCache: Map<string, Verse> = new Map();

export function rebuildVerseSC() {
  for (const verse of verseCache.values()) {
    verse.tokens.forEach((vt) => {
      vt.sc = getSC(vt.sn) ?? null;
    });
  }
}

export async function loadVerse(vid): Promise<Verse> {
  let verse = verseCache.get(vid);
  if (!verse) {
    const data = await api.bible.loadChapter(vid);
    // console.log(data);

    const lines = data.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const [bookId, chapterId] = vid.split(":");
      const _vid = `${bookId}:${chapterId}:${i + 1}`;
      verseCache.set(
        _vid,
        buildVerseFromString(_vid, lines[i], bookId < 40 ? "H" : "G"),
      );
    }
    verse = verseCache.get(vid);
  }
  // console.log(verse);

  return verse;
}

export function buildVerses(data: any): Verse[] {
  const verses: Verse[] = [];
  data.forEach((d) => {
    const v = buildVerse(d);
    verseCache.set(v.vid, v);
    verses.push(v);
  });
  return verses;
}

function buildVerse(verseData: any): Verse {
  // const t: string = verseData.translations[0].tokens;
  const v: Verse = {} as Verse;
  v.tokens = [];

  const lang = verseData.vid.split(":")[0] < 40 ? "H" : "G";
  verseData.data.split("`").forEach((token) => {
  // data.translations[0].tokens.split("`").forEach((token) => {
    const parts = token.split("₋");
    if (parts.length === 1) {
      v.tokens.push(buildVerseToken(parts[0]));
    } else {
      const sn = parts[1].padStart(4, "0");
      v.tokens.push(buildVerseToken(parts[0], `${lang}${sn}`));
    }
  });

  v.vid = verseData.vid;
  v.data = verseData.data;
  // v.sourceLang = data.translations[0].sourceLang;
  // v.translationTitle = data.translations[0].title;
  v.text = v.tokens.reduce((text, token) => {
    return text + token.tr;
  }, "");
  return v;
}
export function buildVerseFromString(vid, data: any, lang): Verse {
  // const t: string = data.translations[0].tokens;

  const v: Verse = {} as Verse;
  v.tokens = [];
  data.split("`").forEach((token) => {
    const parts = token.split("₋");
    if (parts.length === 1) {
      v.tokens.push(buildVerseToken(parts[0]));
    } else {
      const sn = parts[1].padStart(4, "0");
      v.tokens.push(buildVerseToken(parts[0], `${lang}${sn}`));
    }
  });

  v.vid = vid;
  // v.data = data;
  // v.translationTitle = "Синодальный перевод";
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

export function addFirstVerse() {
  const v = "В начале₋7225` `сотворил₋1254` `Бог₋430` `небо₋8064` `и₋853` `землю₋776`.";
  verseCache.set("1:1:1", buildVerseFromString("1:1:1", v, "H"));
}
