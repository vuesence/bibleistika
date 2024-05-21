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


// getVerse(1, 1, 4);
// getVerse(3, 1, 15);
// exit;

$bookId = 1;
$chapterId = 1;
$verseId = 1;

$bookId = 20;
$chapterId = 30;
$verseId = 19;

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

    if (!$html) {
        sleep(10);
        $html = file_get_html("https://bible-teka.com/strong/" . $bookId . "/" . $chapterId . "/" . $verseId);
    }

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
            "sourceLang" => $bookId < 40 && ($title !== "Септуагинта") ? "H" : "G",
            "text" => $verse["text"],
            "strongNumbers" => $verse["strongNumbers"],
            "tokens" => $verse["tokens2"],
            // "tokens" => $verse["tokens"],
        ];
    }

    // file_put_contents('test.json', json_encode($translations, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    // echo json_encode($translations, JSON_PRETTY_PRINT, JSON_UNESCAPED_UNICODE);
    // break;
    saveVerse($bookId, $chapterId, $verseId, 
        json_encode($translations, JSON_UNESCAPED_UNICODE), 
        $translations[0]["text"], 
        $rawData
    );
    return true;

}

function parseVerse($str) {
    $tokens = [];
    $tokens2 = [];
    // echo $str;
    $str = preg_replace('/<p>.*?<\/p>/s', '', $str);
    $str = preg_replace('/<a href="#" class="strong strong2" onclick="return chMR.*?<\/a>/s', '', $str);
    preg_match_all('/<span class="strong strong2">(.*?)<\/span>/s', $str, $matches);
    $verseStrongNumbers = $matches[1];
    $str = preg_replace('/<span class="strong strong2">.*?<\/span>/s', '', $str);
    $str = str_replace('</a>', '&&&&&', $str);
    
    // $sourceLang = str_contains($str, "str-greek") ? "greek" : "hebrew";
    // $str = preg_replace('/<span class=\"strong strong2\">.*?<\/span>/s', '', $str);
    $str = str_replace('<a href="#" class="strong" onclick="return chSTR(this,\'', '&&&&&', $str);
    $str = str_replace('<a href="#" class="strong" onclick="return chSTR(this, \'', '&&&&&', $str);
    $str = str_replace('<a href="#" class="strong" onclick="return chLXX(this, \'', '&&&&&', $str);
    $str = str_replace('<a href="#" class="strong strong2" onclick="return chMR(this, \'', '&&&&&', $str);
    $str = str_replace('\')">', '~~~~~', $str);
    // $str = preg_replace('/<a href=\"#\" class=\"strong\" onclick=\"return chSTR(this,\'.*?')\">/s', '', $str);

    $str = trim(strip_tags($str));

    $data = explode('&&&&&', $str);

    $strongIndex = 0;
    
    $delimiter = "₋";
    foreach ($data as $word) {
        if ($word === "") {
            continue;
        }
        $parts = explode('~~~~~', $word);
        // echo $word . "\n";
        if (count($parts) > 1) {
            // $a1 = $verseStrongNumbers[$strongIndex];
            // $a2 = $parts[0];
            // if (!($verseStrongNumbers[$strongIndex + 1] ?? false)) {
                // echo $parts[1] . " - " . $parts[0] . "\n";
            if (count($verseStrongNumbers) <= $strongIndex) {
                $tokens[] = [
                    "tn" => $parts[1],
                    "sn" => $parts[0]
                ];
                $tokens2[] = $parts[1] . $delimiter . $parts[0];
                continue;
            }
            // echo $verseStrongNumbers[$strongIndex] . " ---- " . $parts[0] . "\n";
            if ($verseStrongNumbers[$strongIndex] === $parts[0]) {
                $tokens[] = [
                    // "tn" => "|" . trim($parts[1]) . "|",
                    "tn" => $parts[1],
                    "sn" => $parts[0]
                ];
                $tokens2[] = $parts[1] . $delimiter . $parts[0];
                $strongIndex++;
            } else if (($verseStrongNumbers[$strongIndex + 1] ?? false) && $verseStrongNumbers[$strongIndex + 1] !== $parts[0]) {
                $tokens[] = [
                    "tn" => $parts[1],
                    "sn" => $parts[0]
                ];
                $tokens2[] = $parts[1] . $delimiter . $parts[0];
            } else {   
                $tokens[] = [
                    "tn" => "",
                    "sn" => $verseStrongNumbers[$strongIndex]
                ];
                $tokens2[] = $delimiter . $verseStrongNumbers[$strongIndex];
                $tokens2[] = " ";
                $tokens2[] = $parts[1] . $delimiter . $parts[0];
                // $tokens2[] = $delimiter . $verseStrongNumbers[$strongIndex];
                $strongIndex+=2;
            }
        } else {
            $tokens[] = [
                "tn" => str_replace('  ', ' ', str_replace('  ', ' ', $parts[0]))
            ];
            $tokens2[] = preg_replace('/\s+/', ' ', $parts[0]);

        }
    }

    // echo "\n\n\n";
    // echo $str;
    $verse["text"] = array_reduce($tokens, function ($carry, $item) {
        return $carry . $item["tn"];
    });
    $verse["tokens"] = $tokens;
    $verse["strongNumbers"] = $verseStrongNumbers;
    $verse["tokens2"] = implode("🞍", $tokens2);
    // $verse["sourceLang"] = $sourceLang;
    // $verse["string"] = $str;
    return $verse;
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