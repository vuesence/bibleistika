<?php

include("init-db.php");

$sql = "SELECT `vid`, `translations` FROM `verses`";
$result = $conn->query($sql);

// Fetch all rows as an associative array
$versesRows = $result->fetch_all(MYSQLI_ASSOC);
// Process the rows as needed
$result->close();

$versesRows = array_map(function($row) {
    [$bookId, $chapterId, $verseId] = explode(':', $row['vid']);
    $prefix = $bookId < 40 ? "H" : "G";
    if ("G" != $prefix) {
        return NULL;
    }
    $row['translations'] = json_decode($row['translations']);
    if (!is_array($row['translations']) || count($row['translations']) == 0) {
        echo "Empty translations: " . $row['vid'] . "\n";
        exit;
    }
    $verse = $row['translations'][0];
    if ($verse->strongNumbers == null) {
        echo "Empty strong numbers: " . $row['vid'] . "\n";
        // exit;
    }
    return [
        'vid' => $row['vid'],
        'translations' => $row['translations'],
        "strongNumbers" => $verse->strongNumbers
    ];
}, $versesRows);

$versesRows = array_filter($versesRows, function($row) {
    return $row !== NULL;
});

// $sql = "SELECT `number`, `data`, `type` FROM `strongs_сoncordance`";
// $sql = "SELECT `id`, `number`, `data`, `type` FROM `strongs_сoncordance` WHERE `type` = 'h' AND id < 10";
$sql = "SELECT `id`, `number`, `data`, `type` FROM `strongs_сoncordance` WHERE `type` = 'g'";
$result = $conn->query($sql);

$lemmas = $result->fetch_all(MYSQLI_ASSOC);
$data = "";
foreach ($lemmas as $lemma) {
    $t = $lemma['type'] === "h" ? "H" : "G";
    $res = findOccurrences($lemma['number'], $t);

    if ($lemma['number'] % 100 == 0) {        
        echo $lemma['number'] . " - " . $res["count"] . "\n";
    }

    $d = json_decode($lemma['data'], true);
    $d["o"] = +$res["count"];
    
    $sql = "UPDATE `strongs_сoncordance` SET `occurrences` = '".json_encode($res["verses"])."', 
        `data` = '".mysqli_real_escape_string($conn, json_encode($d, JSON_UNESCAPED_UNICODE))."' WHERE `id` = ".$lemma['id'];
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



function findOccurrences($sn, $t) {
    global $versesRows;
    $data = "";
    $count = 0;
    $verses = [];
    $i = 0;
    foreach ($versesRows as $row) {
        // if ($i % 100 == 0) {        
        //     echo $i++ . " - " . $count . "\n";
        // }
        // [$bookId, $chapterId, $verseId] = explode(':', $row['vid']);
        // $prefix = $bookId < 40 ? "H" : "G";
        // if ($t != $prefix) {
        //     continue;
        // }
        // $row['translations'] = json_decode($row['translations']);
        // if (!is_array($row['translations']) || count($row['translations']) == 0) {
        //     echo "Empty translations: " . $row['vid'] . "\n";
        //     exit;
        // }
        // $verse = $row['translations'][0];
        // if ($verse->strongNumbers == null) {
        //     echo $sn;
        //     exit;
        // }
        // $strongNumbers = $verse->strongNumbers;
        $snInclusionCount = count(array_keys($row["strongNumbers"], $sn));
        $count += $snInclusionCount;
        if ($snInclusionCount > 0) {
            $verses[] = $row['vid'];
        }
        // echo $snInclusionCount . "\n";
    }
    // echo "done\n";
    return ["verses" => $verses, "count" => $count];
    // echo print_r($verses, true) . "\n";
}
// Close the result set
// $result->close();

// file_put_contents("public/strongs-dictionary.txt", $data);