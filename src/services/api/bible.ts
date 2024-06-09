import http from "./http/http";
import { buildVerses } from "@/composables/useVerseUtils";

const apiUrl = "http://192.168.1.101/api";

const bible = {
  async loadVerse(vid: string) {
    const [bookId, chapterId, verseId] = vid.split(":");
    const data = await http.get(
      `${apiUrl}/verse/index.php?
        bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`,
    );
    return data;
  },

  async loadChapter(vid: string) {
    const [bookId, chapterId] = vid.split(":");
    return await (await http.get(`/bible/${bookId}/${chapterId}.syn.txt`, true)).text();
  },

  async loadStrongsConcordance() {
    return await (await http.get("/strongs-dictionary.txt", true)).text();
  },

  async loadLemmaOccurrences(sn: string) {
    return buildVerses(
      await http.get(`${apiUrl}/verse/lemma-occurences.php?sn=${sn}`),
    );
  },

  async loadSearchResults(searchString: string) {
    return buildVerses(
      await http.get(`${apiUrl}/verse/search.php?search=${searchString}`),
    );
  },

  async loadDict(sn: string, type: string) {
    return await (await http.get(
      `${apiUrl}/verse/dict.php?sn=${sn}&dict=${type}`,
      true,
    )).text();
  },

};

export default bible;
