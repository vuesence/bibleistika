import http from "./http/http";
import { buildVerses } from "@/utils/verseUtils";

// const apiUrl = "http://192.168.1.101/api";
const apiUrl = "https://bibleistika.alwaysdata.net";
const bibleApiUrl = "https://bible.bibleistika.ru";

const bible = {
  // async loadVerse(vid: string) {
  //   const [bookId, chapterId, verseId] = vid.split(":");
  //   const data = await http.get(
  //     `${apiUrl}/verse/index.php?bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`,
  //   );
  //   return data;
  // },

  // async loadVerseOriginText(vid: string) {
  //   const [bookId, chapterId, verseId] = vid.split(":");
  //   const data = await http.get(
  //     `${apiUrl}/verse/verseOrigin.php?bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`,
  //   );
  //   return data;
  // },

  async loadChapter(vid: string) {
    const [bookId, chapterId] = vid.split(":");
    return await (await http.get(`${bibleApiUrl}/bible/${bookId}/${chapterId}.syn.txt`, true)).text();
  },

  async loadChapterOrigin(vid: string) {
    const [bookId, chapterId] = vid.split(":");
    return await (await http.get(`${bibleApiUrl}/bible/${bookId}/${chapterId}.origin.txt`, true)).text();
  },

  async loadCrossReferences(vid: string) {
    const [bookId, chapterId] = vid.split(":");
    return await (await http.get(`${bibleApiUrl}/bible/${bookId}/${chapterId}.xr.txt`, true)).text();
  },

  async loadStrongsConcordance() {
    return (await http.get(`${bibleApiUrl}/strongs-dictionary.txt`, true)).text();
  },

  async loadLemmaOccurrences(sn: string) {
    return http.get(`${apiUrl}/lemma-occurences.php?sn=${sn}`);
  },

  async loadSearchResults(searchString: string) {
    return http.get(`${apiUrl}/search.php?search=${searchString}`);
  },

  async loadDict(sn: string, type: string) {
    return await (await http.get(
      `${apiUrl}/dict.php?sn=${sn}&dict=${type}`,
      // `${apiUrl}/verse/dict.php?sn=${sn}&dict=${type}`,
      true,
    )).text();
  },

};

export default bible;
