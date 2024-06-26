<?php
include('simple_html_dom.php');

include("init-db.php");


// getVerse(1, 1, 4);
// getVerse(44,19,17);
// exit;

$bookId = 1;
$chapterId = 1;
$verseId = 1;

$lines = [];

$bookId = 19;
$chapterId = 147;
$verseId = 1;

while (true) { 
    // if ($bookId > 2 && $chapterId > 2) {
    //     break;
    // }
    echo $bookId . " - " . $chapterId . " - " . $verseId . "\n";
    $res = getVerse($bookId, $chapterId, $verseId);
    $verseId++;
    if (!$res) {        
        if ($verseId === 2) {
            $bookId++;
            $chapterId = 1;
        } else {
            saveChapter($bookId, $chapterId);
            $chapterId++;
        }
        $verseId = 1;
    }
}

// Close the connection
$conn->close();

// getVerse($bookId, $chapterId, $verseId);

function getVerse($bookId, $chapterId, $verseId) {
    global $lines;
    // $data = file_get_contents("https://bible-teka.com/strong/" . $book . "/" . $chapter . "/" . $verse);
    
    // $html = file_get_html('http://www.google.com/');
    $html = file_get_html("https://bible-teka.com/vs/" . $bookId . "/" . $chapterId . "/" . $verseId);

    if (!$html) {
        sleep(10);
        $html = file_get_html("https://bible-teka.com/vs/" . $bookId . "/" . $chapterId . "/" . $verseId);
    }

    if (str_contains($html->outertext, "Мы не нашли")) {
        return false;
    };
    if (!$html->find('div.col-md-12', 0)) {
        return true;
    }
    $txt = $html->find('div.col-md-12', 0)->outertext;
    $pattern = '/<a\s+[^>]*>(.*?)<\/a>/si';
    preg_match_all($pattern, $txt, $matches);
    
    // print_r($matches[1]);

    $bibleStructure = json_decode(file_get_contents(__DIR__ . "/../src/utils/bibleStructure.json"), true);

    $delimiter = "₋";

    $xrs = [$bookId . ":" . $chapterId . ":" . $verseId];
    foreach ($matches[1] as $xr) {
        $data = explode(" ", $xr);
        // if (count($data) < 2) {
        //     continue;
        // }
        $book = $data[0];
        $cv = explode(":", $data[1]);
        $chapter = $cv[0];
        $verses = $cv[1];
        $verseArr = explode("-", $verses);
        if (count($verseArr) == 1) {
            $verseRange = $verseArr;
        } else {
            $verseStart = intval($verseArr[0]);
            $verseEnd = intval($verseArr[1]);
            $verseRange = range($verseStart, $verseEnd);
        }
        // $verseId = $verseArr[0];
        // echo $book .":". $chapter .":". $verses . "\n";
        $arr = array_values(array_filter($bibleStructure, function($item) use ($book) {
            return $item["shortName"] == $book;
        }));
        if (count($arr) == 0) {
            echo $book .":". $chapter .":". $verses . "\n";
            continue;
            // exit;
        }
        $bookId =$arr[0]["id"];
        // echo $bookId .":". $chapter .":". $verses . "\n";
        $match = [
            "name" => $xr,
            "vid" => $bookId .":". $chapter .":". $verseRange[0],
            "bookId" => $bookId,
            "chapterId" => $chapter,
            "verses" => $verseRange,
        ];
        // print_r($match);
        
        // $str = $bookId . ":" . $chapterId . ":" . $verseId . $delimiter;
        $str = $match["name"] . $delimiter;
        // $str .= $match["vid"] . $delimiter;
        $str .= $match["bookId"] . $delimiter;
        $str .= $match["chapterId"] . $delimiter;
        $str .= implode(",", $match["verses"]);
        // echo $str;
        $xrs[] = $str;
        // saveVerse($str);
        
        // exit;

    }
    $line = implode("`", $xrs);

    $lines[] = $line;

    return true;

}

function saveChapter($bookId, $chapterId) {
    global $lines;
    $data = implode("\n", $lines);
    file_put_contents("public/bible/" . $bookId . "/" . $chapterId . ".xr.txt", $data);
    $lines = [];
}

function saveVerse($bookId, $chapterId, $verseId, $translations, $text, $rawLoadedData) {
    global $conn;
    // Escape the values
    $bookId = mysqli_real_escape_string($conn, $bookId);
    $chapterId = mysqli_real_escape_string($conn, $chapterId);
    $verseId = mysqli_real_escape_string($conn, $verseId);
    $translations = mysqli_real_escape_string($conn, $translations);
    $text = mysqli_real_escape_string($conn, $text);
    $rawLoadedData = mysqli_real_escape_string($conn, $rawLoadedData);

    // Insert statement
    $vid = implode(':', [$bookId, $chapterId, $verseId]);
    $sql = "INSERT 
        INTO verses (vid, bookId, chapterId, verseId, translations, text, rawLoadedData) 
        VALUES ('$vid', '$bookId', '$chapterId', '$verseId', '$translations', '$text', '$rawLoadedData')
        ON DUPLICATE KEY UPDATE    
            translations='$translations', text='$text', rawLoadedData='$rawLoadedData'";

    // Execute the statement
    if ($conn->query($sql) === TRUE) {
        // echo "New record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }    
}

function saveBook($bookId, $name) {
    global $conn;
    // Escape the values
    $bookId = mysqli_real_escape_string($conn, $bookId);
    $name = mysqli_real_escape_string($conn, $name);
    
    // Insert statement
    $sql = "INSERT 
        INTO books (id, name) 
        VALUES ('$bookId', '$name')
        ON DUPLICATE KEY UPDATE    
            name='$name'";

    // Execute the statement
    if ($conn->query($sql) === TRUE) {
        // echo "New book inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}