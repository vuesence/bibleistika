import http from "./http";
// import { jsonRpc } from "./jsonrpc";

const strongsConcordance = {
  async loadHebrew() {
    const response = await http.get("/strongs-dictionary.txt", true);
    const data = await response.text();
    return data;
  },

  // async testJsonRpc() {
  //   return jsonRpc(
  //     {
  //       method: "getBestBlockHash",
  //       params: {},
  //     },
  //     { uri: "https://seed-1.testnet.networks.dash.org:1443/" }
  //   );
  // },
};

export default strongsConcordance;
