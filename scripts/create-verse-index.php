<?php 
require_once('./phpmorphy/vendor/autoload.php');

$morphy = new cijic\phpMorphy\Morphy('ru');
// print_r($morphy->getPseudoRoot('КОЛЁСНЫЙ'));
// print_r($morphy->getBaseForm('КОЛЁСНОМУ'));

// var_dump($morphy->getAllFormsWithGramInfo("поездом"));


include("init-db.php");

// $sql = "SELECT `vid`, `text` FROM `verses` WHERE id = 907";
$sql = "SELECT `vid`, `text` FROM `verses`";
$result = $conn->query($sql);
$rows = $result->fetch_all(MYSQLI_ASSOC);
foreach ($rows as $row) {
    $word = array();
    $words = mb_strtoupper(str_ireplace("ё", "е", $row['text']), "UTF-8");
    preg_match_all ( '/([a-zа-яё]+)/ui', $words, $word_pma );
	$words = $morphy->lemmatize ($word_pma[1]); 
    foreach ( $words as $k => $w ) { 
		//Если не удалось получить начальную форму
		if (!$w) {
            $w = [];
            $w[0] = str_ireplace("ё", "е", $k);
        }        

        foreach ($w as $ww) {
            //Индексируем только слова, длиннее двух символов
            if (mb_strlen ( $ww, "UTF-8" ) > 2) {
                if (!isset($word[$ww])) $word[$ww] = 0;
            }
        }
	}

    foreach ($word as $wd => $t) {
        $wd = str_ireplace("ё", "е", $wd);
		$conn->query("INSERT INTO `verse_index` SET `word` = '".$wd."', `vid` = '".$row['vid'].
            "' ON DUPLICATE KEY UPDATE `vid` = '".$row['vid']."'"); 
	}

    // echo $row['text'] . "\n";
    // print_r($word);
}

// Close the result set
$result->close();

// // print_r($morphy->getAllFormsWithGramInfo('КОЛЁСНЫЙ', true));
// $word = array ();
// $words = $morphy->lemmatize ( ["приветы", "пар", "пар", "жену"] ); 

// foreach ( $words as $k => $w ) { 
//     //Если не удалось получить начальную форму
//     if (! $w)$w [0] = $k;

//     //Индексируем только слова, длиннее двух символов
//     if (mb_strlen ( $w [0], "UTF-8" ) > 2) {
//         if (! isset ( $word [$w [0]] )) $word [$w [0]] = 0; 

//         //Выставляем вес слова
//         $word [$w [0]] += 3;
//     }
// }

// print_r($word);