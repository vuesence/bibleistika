import http from "./http/http";
// import { jsonRpc } from "./jsonrpc";

const verses = {
  async getVerse(id: string) {
    const [bookId, chapterId, verseId] = id.split("-");
    const data = await http.get(
      `http://192.168.1.101/api/verse/?bookId=${bookId}&chapterId=${chapterId}&verseId=${verseId}`
    );
    console.log(data);

    // const data = await response.text();
    return data;
  },
};

export default verses;
