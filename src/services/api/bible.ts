import http from "./http/http";
// import { jsonRpc } from "./jsonrpc";

const bible = {
  async loadVerse(vid: string) {
    const [bookId, chapterId, verseId] = vid.split(":");
    const data = await http.get(
      `http://192.168.1.101/api/verse/?
        bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`,
    );
    // console.debug("loaded verse:", data);

    // const data = await response.text();
    return data;
  },

  async loadStrongsConcordance() {
    const response = await http.get("/strongs-dictionary.txt", true);
    return await response.text();
  },

  async loadLemmaOccurrences(sn: string) {
    return await http.get(`http://192.168.1.101/api/verse/lemma-occurences.php?sn=${sn}`);
  },
  async loadBdbDict(sn: string) {
    return await (await http.get(
      `http://192.168.1.101/api/verse/bdb-dict.php?sn=${sn}`,
      // `https://studybible.ru/i/php/brown-driver-briggs.php?n=${sn.substring(1)}`,
      true,
    )).text();
  },
  async loadGeseniusDict(sn: string) {
    return await (await http.get(
      `http://192.168.1.101/api/verse/gesenius-dict.php?sn=${sn}`,
      true,
    )).text();
  },

};

export default bible;
