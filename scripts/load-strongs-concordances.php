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

$strongNumber = 1527;
// $strongNumber = 2316;

$type = "g";

$url = $type === "h" ? "https://bible-teka.com/i/php/strong.php?heb=" : "https://bible-teka.com/i/php/strong.php?greek=";
$max = $type === "h" ? 8675 : 5625;

// for ($i=1; $i < $max; $i++) {
//     echo $i . "\n";
//     getConcordance($i);
// }

echo $strongNumber . "\n";
getConcordance($strongNumber);
$strongNumber++;

// Close the connection
$conn->close();

function getConcordance($strongNumber) {
    global $type, $url;
    $html = file_get_contents($url . $strongNumber);
    $type === "h" ? parseHebrew($strongNumber, $html) : parseGreek($strongNumber, $html);

}

function parseHebrew($strongNumber, $html) {
    $str = substr($html, 0, strpos($html, '<div class="row mt-3">'));

    echo $str . "\n";

    $html = str_get_html($str);

    $data["w"] = $html->find('.pt-3 strong', 0)->innertext;
    $lines = explode("<br>", $html->find('.pt-3', 0)->outertext);
    $data["tr"] = trim(substr($lines[1], 55));
    $data["pr"] = trim(substr($lines[2], 51 ,-6));
    $data["desc"] = $html->find('div', 2)->innertext;
    $data["f"] = +trim($html->find('div', 1)->find("strong", -1)->innertext);
    
    // exit;
    print_r($data);
   
    saveConcordance($strongNumber, json_encode($data, JSON_UNESCAPED_UNICODE));
}

function parseGreek($strongNumber, $html) {
    $html = preg_replace("/<script.*?\/script>/s", "", $html);
    $html = trim(preg_replace("/<style.*?\/style>/s", "", $html));
    $str = substr($html, 0, strpos($html, '<div class="col-sm-4 pb-3">'));

    echo $str . "\n";

    $html = str_get_html($str);

    $data["w"] = $html->find('.pt-3 h4', 0)->innertext;
    $data["tr"] = $html->find('.pt-3', 0)->find("div", 1)->innertext;
    $data["pr"] = $html->find('.pt-3', 0)->find("div", 3)->innertext;
    $data["pos"] = trim(substr($html->find('div', 2)->innertext, 46));
    $data["e"] = trim(substr($html->find('div', 3)->innertext, 48));
    $data["desc"] = trim(substr($html->find('div', 4)->innertext, 44));
    if (!mb_check_encoding($data["desc"], 'UTF-8')) {
        return;
    }
    $data["ota"] = $html->find('div', 5)->innertext;
    
    $ss = $html->find('div', 1)->innertext;
    $start = strpos($ss, "Используется в Новом Завете");
    $end = strpos($ss, "стих", $start);
    $fstr = substr($ss, $start, $end - $start);

    $fhtml = str_get_html($fstr);
    $data["f"] = trim($fhtml->find("strong", 0)->innertext) . "/" . trim($fhtml->find("strong", -1)->innertext);
    // echo $desc . "\n";
    // echo $f . "\n";
    
    // exit;
    print_r($data);

    
    saveConcordance($strongNumber, json_encode($data, JSON_UNESCAPED_UNICODE));
}


function saveConcordance($strongNumber, $data) {
    global $conn, $type;
    // Escape the values
    $data = mysqli_real_escape_string($conn, $data);
    
    // Insert statement
    $sql = "INSERT INTO strongs_сoncordance (number, type, data) 
        VALUES ('$strongNumber', '$type', '$data')
        ON DUPLICATE KEY UPDATE data='$data'";

    // Execute the statement
    if ($conn->query($sql) === TRUE) {
        // echo "New record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }    
}
