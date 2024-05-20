import { api } from "../services/api";
import { Verse } from "./Verse";

const verses: Map<string, Verse> = new Map();

export async function getVerse(vid: string) {
  let verse = verses.get(vid);
  if (!verse) {
    const data = await api.verses.load(vid);
    verse = new Verse(data);
    verses.set(vid, verse);
  }
  return Promise.resolve(verse);
}
