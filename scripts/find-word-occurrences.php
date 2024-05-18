<?php
include("init-db.php");

$sql = "SELECT `vid`, `translations` FROM `verses`";
$result = $conn->query($sql);

// Fetch all rows as an associative array
$versesRows = $result->fetch_all(MYSQLI_ASSOC);
// Process the rows as needed
$result->close();

// $sql = "SELECT `number`, `data`, `type` FROM `strongs_сoncordance`";
$sql = "SELECT `id`, `number`, `data`, `type` FROM `strongs_сoncordance` WHERE `type` = 'h'";
$result = $conn->query($sql);

$rows = $result->fetch_all(MYSQLI_ASSOC);
$data = "";
foreach ($rows as $row) {
    $t = $row['type'] === "h" ? "H" : "G";
    $res = findOccurrences($row['number'], $versesRows, $t);

    echo $row['number'] . " - " . $res["count"] . "\n";

    $d = json_decode($row['data'], true);
    $d["o"] = +$res["count"];
    
    $sql = "UPDATE `strongs_сoncordance` SET `occurrences` = '".json_encode($res["verses"])."', 
        `data` = '".mysqli_real_escape_string($conn, json_encode($d, JSON_UNESCAPED_UNICODE))."' WHERE `id` = ".$row['id'];
    $conn->query($sql);
    // exit;
    
}

// Close the result set
$result->close();

// $sn = "4325";

// $res = findOccurrences($sn, $versesRows);
// echo $res["count"] . "\n";
$res = findOccurrences("3117", $versesRows);
echo $res["count"] . "\n";



function findOccurrences($sn, $rows, $t) {
    $data = "";
    $count = 0;
    $verses = [];
    foreach ($rows as $row) {
        [$bookId, $chapterId, $verseId] = explode(':', $row['vid']);
        $prefix = $bookId < 40 ? "H" : "G";
        if ($t != $prefix) {
            continue;
        }
        $verse = json_decode($row['translations'])[0];
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