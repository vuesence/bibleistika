interface Token {
  tn: string;
  sn?: string;
  originalWord?: string;
}

interface Verse {
  tokens: Token[];
  text: string;
  sourceLang: string;
}

interface StrongsConcordance {
  word: string;
  tr: string;
  pr: string;
  desc: string;
  f: string;
}
