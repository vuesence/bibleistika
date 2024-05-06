<?php
include('simple_html_dom.php');

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Database connection details
$servername = "localhost";
$username = "strongbible";
$password = "strongbible";
$dbname = "strong_bible";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// getVerse(1, 1, 1);
// exit;

$bookId = 41;
$chapterId = 7;
$verseId = 4;

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
            $chapterId++;
        }
        $verseId = 1;
    }
}

// Close the connection
$conn->close();

// getVerse($bookId, $chapterId, $verseId);

function getVerse($bookId, $chapterId, $verseId) {
    // $data = file_get_contents("https://bible-teka.com/strong/" . $book . "/" . $chapter . "/" . $verse);
    
    // $html = file_get_html('http://www.google.com/');
    $html = file_get_html("https://bible-teka.com/strong/" . $bookId . "/" . $chapterId . "/" . $verseId);

    if (str_contains($html->outertext, "Мы не нашли")) {
        return false;
    };
    $book = strip_tags($html->find('div.mainblock .row h1', 0)->outertext);
    $book = trim(substr($book, 29, strpos($book, "глава") - 29));
    echo $book . "\n";
    saveBook($bookId, $book);
    $rawData = "";
    $translations = [];
    foreach($html->find('div.verse-text') as $v) {
        if (count($v->find('strong')) == 0) {
            continue;
        }
        $title = $v->find('strong')[0]->plaintext;
        // echo $title;
        $rawData .= $v->outertext . "\n------\n";
        $verse = parseVerse($v->outertext);
        // print_r($verse);
        if (!$verse["text"]) {
            continue;
        }
        $translations[] = [
            "title" => $title,
            "sourceLang" => $verse["sourceLang"],
            "text" => $verse["text"],
            "tokens" => $verse["tokens"],
        ];
    }

    // file_put_contents('test.json', json_encode($translations, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    // echo json_encode($translations, JSON_PRETTY_PRINT, JSON_UNESCAPED_UNICODE);
    // break;
    saveVerse($bookId, $chapterId, $verseId, 
        json_encode($translations, JSON_UNESCAPED_UNICODE), 
        // "aa 7", 
        $rawData
    );
    return true;

}

function parseVerse($str) {
    $tokens = [];
    // echo $str;
    $str = preg_replace('/<p>.*?<\/p>/s', '', $str);
    $str = preg_replace('/<span class="strong strong2">.*?<\/span>/s', '', $str);
    $str = preg_replace('/<a href="#" class="strong strong2" onclick="return chMR.*?<\/a>/s', '', $str);
    $str = str_replace('</a>', '&&&&&', $str);
    
    $sourceLang = str_contains($str, "chLXX") || str_contains($str, "chSTR") ? "greek" : "hebrew";
    // $str = preg_replace('/<span class=\"strong strong2\">.*?<\/span>/s', '', $str);
    $str = str_replace('<a href="#" class="strong" onclick="return chSTR(this,\'', '&&&&&', $str);
    $str = str_replace('<a href="#" class="strong" onclick="return chSTR(this, \'', '&&&&&', $str);
    $str = str_replace('<a href="#" class="strong" onclick="return chLXX(this, \'', '&&&&&', $str);
    $str = str_replace('<a href="#" class="strong strong2" onclick="return chMR(this, \'', '&&&&&', $str);
    $str = str_replace('\')">', '~~~~~', $str);
    // $str = preg_replace('/<a href=\"#\" class=\"strong\" onclick=\"return chSTR(this,\'.*?')\">/s', '', $str);

    $str = trim(strip_tags($str));

    $data = explode('&&&&&', $str);
    
    foreach ($data as $word) {
        if ($word === "") {
            continue;
        }
        $words = explode('~~~~~', $word);
        if (count($words) > 1) {
            $tokens[] = [
                // "tn" => "|" . trim($words[1]) . "|",
                "tn" => $words[1],
                "sn" => $words[0]
            ];
        } else {
            $tokens[] = [
                "tn" => str_replace('  ', ' ', str_replace('  ', ' ', $words[0]))
            ];

        }
    }

    // echo "\n\n\n";
    // echo $str;
    $verse["text"] = array_reduce($tokens, function ($carry, $item) {
        return $carry . $item["tn"];
    });
    $verse["tokens"] = $tokens;
    $verse["sourceLang"] = $sourceLang;
    // $verse["string"] = $str;
    return $verse;
}

function saveVerse($bookId, $chapterId, $verseId, $translations, $rawLoadedData) {
    global $conn;
    // Escape the values
    $bookId = mysqli_real_escape_string($conn, $bookId);
    $chapterId = mysqli_real_escape_string($conn, $chapterId);
    $verseId = mysqli_real_escape_string($conn, $verseId);
    $translations = mysqli_real_escape_string($conn, $translations);
    $rawLoadedData = mysqli_real_escape_string($conn, $rawLoadedData);

    // Insert statement
    $sql = "INSERT 
        INTO verses (bookId, chapterId, verseId, translations, rawLoadedData) 
        VALUES ('$bookId', '$chapterId', '$verseId', '$translations', '$rawLoadedData')
        ON DUPLICATE KEY UPDATE    
            translations='$translations', rawLoadedData='$rawLoadedData'";

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