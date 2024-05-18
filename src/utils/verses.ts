export function parseVerseId(id: string) {
  const [bookId, chapterId, verseId] = id.split("-");
  return { bookId, chapterId, verseId };
}
