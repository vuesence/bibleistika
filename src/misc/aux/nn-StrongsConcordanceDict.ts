// import { ref } from "vue";
// import { api } from "../../services/api";
// import { rebuildVerse } from "../../utils/verseUtils";
// // import { StrongsConcordance } from "../1StrongsConcordance";

// const loaded = ref(false);

// const dict: Map<string, StrongsConcordance> = new Map();
// const rawDict: Map<string, string> = new Map();

// function get(sn: string): StrongsConcordance {
//   let sc = dict.get(sn);
//   if (!sc) {
//     const data = rawDict.get(sn);
//     if (data) {
//       sc = new StrongsConcordance(sn, data);
//       dict.set(sn, sc);
//     }
//   }
//   return sc;
// }

// async function load() {
//   setTimeout(async () => {
//     const data = await api.bible.loadStrongsConcordance();
//     data
//       .split("\n")
//       .forEach((line: string) => {
//         rawDict.set(line.substring(0, 5), line.substring(6));
//       });
//     loaded.value = true;
//     rebuildVerse();
//   }, 3000);
// }

// export default { get, load, loaded };
