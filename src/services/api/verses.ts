import http from "./http/http";
// import { jsonRpc } from "./jsonrpc";

const verses = {
  async load(vid: string) {
    const [bookId, chapterId, verseId] = vid.split(":");
    const data = await http.get(
      `http://192.168.1.101/api/verse/?
        bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`
    );
    console.debug("loaded verse:", data);

    // const data = await response.text();
    return data;
  },
};

export default verses;
