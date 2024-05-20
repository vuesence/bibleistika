// import type { Token } from "@/index.d.ts";
import SCDict from "./StrongsConcordanceDict";

export class VerseToken {
  tr: string;
  sn?: string;
  ow?: string;

  constructor(_tn: string, _sn?: string) {
    this.tr = _tn === "" ? " " : _tn;

    if (_sn) {
      this.sn = _sn;
      this.ow = SCDict.get(_sn)?.word ?? "?";
    }
  }
}
