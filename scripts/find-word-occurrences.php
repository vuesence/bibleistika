<?php
include("init-db.php");

$sql = "SELECT `vid`, `translations` FROM `verses`";
$result = $conn->query($sql);

// Fetch all rows as an associative array
$versesRows = $result->fetch_all(MYSQLI_ASSOC);
// Process the rows as needed
$result->close();

// $sql = "SELECT `number`, `data`, `type` FROM `strongs_сoncordance`";
// $sql = "SELECT `id`, `number`, `data`, `type` FROM `strongs_сoncordance` WHERE `type` = 'h' AND id < 10";
$sql = "SELECT `id`, `number`, `data`, `type` FROM `strongs_сoncordance` WHERE `type` = 'h'";
$result = $conn->query($sql);

$words = $result->fetch_all(MYSQLI_ASSOC);
$data = "";
foreach ($words as $word) {
    $t = $word['type'] === "h" ? "H" : "G";
    $res = findOccurrences($word['number'], $versesRows, $t);

    if ($word['number'] % 100 == 0) {        
        echo $word['number'] . " - " . $res["count"] . "\n";
    }

    $d = json_decode($word['data'], true);
    $d["o"] = +$res["count"];
    
    $sql = "UPDATE `strongs_сoncordance` SET `occurrences` = '".json_encode($res["verses"])."', 
        `data` = '".mysqli_real_escape_string($conn, json_encode($d, JSON_UNESCAPED_UNICODE))."' WHERE `id` = ".$word['id'];
    $conn->query($sql);
    // exit;
    
}

// Close the result set
$result->close();

// $sn = "4325";

// $res = findOccurrences($sn, $versesRows);
// echo $res["count"] . "\n";
// $res = findOccurrences("3117", $versesRows, "H");
// echo $res["count"] . "\n";



function findOccurrences($sn, $versesRows, $t) {
    $data = "";
    $count = 0;
    $verses = [];
    foreach ($versesRows as $row) {
        [$bookId, $chapterId, $verseId] = explode(':', $row['vid']);
        $prefix = $bookId < 40 ? "H" : "G";
        if ($t != $prefix) {
            continue;
        }
        $row['translations'] = json_decode($row['translations']);
        if (!is_array($row['translations']) || count($row['translations']) == 0) {
            echo "Empty translations: " . $row['vid'] . "\n";
            exit;
        }
        $verse = $row['translations'][0];
        if ($verse->strongNumbers == null) {
            echo $sn;
            exit;
        }
        $strongNumbers = $verse->strongNumbers;
        $snInclusionCount = count(array_keys($strongNumbers, $sn));
        $count += $snInclusionCount;
        if ($snInclusionCount > 0) {
            $verses[] = $row['vid'];
        }
        // echo $snInclusionCount . "\n";
    }
    return ["verses" => $verses, "count" => $count];
    // echo print_r($verses, true) . "\n";
}
// Close the result set
// $result->close();

// file_put_contents("public/strongs-dictionary.txt", $data);