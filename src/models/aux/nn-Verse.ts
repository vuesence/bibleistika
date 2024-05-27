// // import type { VerseToken } from "./VerseToken";
// import { getSC } from "@/composables/useStrongsConcordance";

// export class Verse {
//   readonly data: any;
//   readonly vid: string;
//   readonly bookId: number;
//   readonly chapterId: number;
//   readonly verseId: number;

//   readonly tokens: VerseToken[];
//   readonly text: string;
//   readonly sourceLang: string;
//   readonly translationTitle: string;

//   constructor(data: any) {
//     // const t: string = data.translations[0].tokens;
//     this.tokens = [];
//     data.translations[0].tokens.split("🞍").forEach((token) => {
//       const parts = token.split("₋");
//       if (parts.length === 1) {
//         this.tokens.push(buildVerseToken(parts[0]));
//       } else {
//         const sn = parts[1].padStart(4, "0");
//         this.tokens.push(buildVerseToken(parts[0], `H${sn}`));
//       }
//     });

//     this.data = data;
//     this.sourceLang = data.translations[0].sourceLang;
//     this.translationTitle = data.translations[0].title;
//     this.text = this.tokens.reduce((text, token) => {
//       return text + token.tr;
//     }, "");
//   }
// }

// function buildVerseToken(_tn: string, _sn?: string): VerseToken {
//   const vt: VerseToken = {
//     tr: _tn === "" ? " " : _tn,
//   };

//   if (_sn) {
//     vt.sn = _sn;
//     vt.ow = getSC(_sn)?.lemma ?? "";
//   }
//   return vt;
// }
