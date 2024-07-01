<?php

include("init-db.php");
$books = json_decode(file_get_contents("../src/utils/bibleStructure.json"));    
// echo $bs;

foreach ($books as $book) {
    // echo $book->name;
    $bookId = $book->id;
    // if ($bookId > 3) exit;
    $ch = 1;
    foreach ($book->chapters as $chapter) {
        if (!is_dir('../public/bible/' . $bookId)) {
            mkdir('../public/bible/' . $bookId, 0777, true);
        }
        $data = [];
        $dataTxt = [];
        $sql = "SELECT `vid`, `origin` FROM `verses` WHERE vid LIKE '{$bookId}:{$ch}%' ORDER BY id";
        $result = $conn->query($sql);
        $rows = $result->fetch_all(MYSQLI_ASSOC);
        foreach ($rows as $row) {
            $data[] = [
                'vid' => $row['vid'],
                'tokens' => $row['origin']
            ];
            $dataTxt[] = $row['origin'];
        }
        $data = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $result->close();

        file_put_contents("../public/bible/" . $bookId . "/" . $ch . ".origin.json", $data);
        file_put_contents("../public/bible/" . $bookId . "/" . $ch . ".origin.txt", implode("\n", $dataTxt));
        $ch++;
    }
}

exit;


