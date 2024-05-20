import { VerseToken } from "./VerseToken";

export class Verse {
  readonly id: string;
  readonly bookId: number;
  readonly chapterId: number;
  readonly verseId: number;

  readonly tokens: VerseToken[];
  readonly text: string;
  readonly sourceLang: string;
  readonly translationTitle: string;

  constructor(data: any) {
    // const t: string = data.translations[0].tokens;
    this.tokens = [];
    data.translations[0].tokens.split("🞍").forEach((token) => {
      const parts = token.split("₋");
      if (parts.length === 1) {
        this.tokens.push(new VerseToken(parts[0]));
      } else {
        const sn = parts[1].padStart(4, "0");
        this.tokens.push(new VerseToken(parts[0], `H${sn}`));
      }
    });

    this.sourceLang = data.translations[0].sourceLang;
    this.translationTitle = data.translations[0].title;
    this.text = this.tokens.reduce((text, token) => {
      return text + token.tr;
    }, "");
  }
}
