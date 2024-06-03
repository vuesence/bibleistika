import http from "./http/http";
// import { jsonRpc } from "./jsonrpc";

const bible = {
  async loadVerse(vid: string) {
    const [bookId, chapterId, verseId] = vid.split(":");
    const data = await http.get(
      `http://192.168.1.101/api/verse/?
        bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`,
    );
    return data;
  },

  async loadChapter(vid: string) {
    const [bookId, chapterId] = vid.split(":");
    const data
      = await (await http.get(`/bible/${bookId}/${chapterId}.syn.txt`, true)).text();
    return data;
  },

  async loadStrongsConcordance() {
    const response = await http.get("/strongs-dictionary.txt", true);
    return await response.text();
  },

  async loadLemmaOccurrences(sn: string) {
    return await http.get(`http://192.168.1.101/api/verse/lemma-occurences.php?sn=${sn}`);
  },

  async loadSearchResults(searchString: string) {
    return await http
      .get(`http://192.168.1.101/api/verse/search.php?search=${searchString}`);
  },

  async loadDict(sn: string, type: string) {
    return await (await http.get(
      `http://192.168.1.101/api/verse/dict.php?sn=${sn}&dict=${type}`,
      true,
    )).text();
  },

};

export default bible;
