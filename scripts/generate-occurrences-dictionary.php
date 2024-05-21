<?php

include("init-db.php");

$sql = "SELECT `number`, `type`, `occurrences` FROM `strongs_сoncordance`";
// $sql = "SELECT `number`, `occurrences` FROM `strongs_сoncordance WHERE `type` = 'h'`";
$result = $conn->query($sql);

$rows = $result->fetch_all(MYSQLI_ASSOC);
$data = "";
foreach ($rows as $row) {
    $t = $row['type'] === "h" ? "H" : "G";
    $sn = $t . str_pad($row['number'], 4, "0", STR_PAD_LEFT);
    $o = str_replace(["[", "]", "\"", ', '], ['', '', '', ','], $row['occurrences']);
    $line = $sn . "¡" . $o . "\n";    
    $data = $data . $line;
}

// Close the result set
$result->close();

file_put_contents("public/strongs-occurrences.txt", $data);