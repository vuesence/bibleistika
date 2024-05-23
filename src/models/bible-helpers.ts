import { books } from "./bible-structure.json";

// interface IBook {
//   id: number;
//   name: string;
//   chapters: number[];
// }

export { books };

export function parseVerseId(vid: string): {
  bookId: number
  chapterId: number
  verseId: number
} {
  const [bookId, chapterId, verseId] = vid.split(":");
  return { bookId: +bookId, chapterId: +chapterId, verseId: +verseId };
}

export function chapterAndVerseId(vid: string) {
  return vid ? vid.split(":").slice(1).join(":") : null;
}

export function nextVerseId(vid: string) {
  const { bookId, chapterId, verseId } = parseVerseId(vid);

  if (verseId >= books[bookId - 1].chapters[chapterId - 1]) {
    if (books[bookId - 1].chapters[chapterId]) {
      return `${bookId}:${chapterId + 1}:1`;
    }
    return `${bookId}:${chapterId}:${verseId}`;
  } else {
    return `${bookId}:${chapterId}:${verseId + 1}`;
  }
}
export function prevVerseId(vid: string) {
  const { bookId, chapterId, verseId } = parseVerseId(vid);

  if (verseId > 1) {
    return `${bookId}:${chapterId}:${verseId - 1}`;
  } else {
    if (chapterId > 1) {
      return `${bookId}:${chapterId - 1}:${
        books[bookId - 1].chapters[chapterId - 2]
      }`;
    } else {
      return `${bookId}:${chapterId}:${verseId}`;
    }
  }
}

export function getBookName(vid: string) {
  const { bookId } = parseVerseId(vid);
  return books[bookId - 1].name;
}
