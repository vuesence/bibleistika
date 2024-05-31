SELECT bookId, chapterId, COUNT(DISTINCT verseId) AS verseCount
FROM verses
GROUP BY bookId, chapterId;
