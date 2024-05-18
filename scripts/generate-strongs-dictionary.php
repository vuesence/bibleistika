<?php

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


$sql = "SELECT `number`, `data`, `type` FROM `strongs_сoncordance`";
// $sql = "SELECT `number`, `data`, `type` FROM `strongs_сoncordance` WHERE `type` = 'h'";
$result = $conn->query($sql);

// Fetch all rows as an associative array
$rows = $result->fetch_all(MYSQLI_ASSOC);
// Process the rows as needed
$data = "";
foreach ($rows as $row) {
    $t = $row['type'] === "h" ? "H" : "G";
    $sn = $t . str_pad($row['number'], 4, "0", STR_PAD_LEFT);
    $d = json_decode($row['data'], true);
    $line = $sn . "¡" 
        . $d["w"] . "¡"
        . $d["tr"] . "¡"
        . $d["pr"] . "¡"
        . $d["desc"] . "¡"
        . $d["f"] . "\n";    
    $data = $data . $line;
}

// Close the result set
$result->close();

file_put_contents("public/strongs-dictionary.txt", $data);