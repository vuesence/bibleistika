import http from "./http/http";

const strongsConcordance = {
  async load() {
    const response = await http.get("/strongs-dictionary.txt", true);
    return await response.text();
  },
};

export default strongsConcordance;
