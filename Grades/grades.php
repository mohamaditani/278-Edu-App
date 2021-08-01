<?php

$grade = $_POST["grade"];
$name = $_POST["name"];
$difficulty = $_POST["difficulty"];
$subj = $_POST["subj"];

// echo $grade;
// echo $name;
// echo $difficulty;
// echo $subj;

//load json get_included_files
$json = file_get_contents("../Data/accounts.json");
$json_data = json_decode($json, true);

foreach ($json_data as $key1 => $value1) {

        foreach ($json_data[$key1] as $key2 => $value1) {
          if($json_data[$key1][$key2]['name'] == $name){
            if($subj === "english"){
              if ($difficulty === "easy") {
                array_push($json_data[$key1][$key2]['English']['easy'], (int)$grade);
              }elseif ($difficulty === "medium") {
                array_push($json_data[$key1][$key2]['English']['medium'], (int)$grade);
              } else {
                array_push($json_data[$key1][$key2]['English']['hard'], (int)$grade);
            }
          }else{
            if ($difficulty === "easy") {
              array_push($json_data[$key1][$key2]['Math']['easy'], (int)$grade);
            }elseif ($difficulty === "medium") {
              array_push($json_data[$key1][$key2]['Math']['medium'], (int)$grade);
            } else {
              array_push($json_data[$key1][$key2]['Math']['hard'], (int)$grade);
          }
          }
        }
    }
  }

  $jsonEnc = json_encode($json_data, true);
  file_put_contents("../Data/accounts.json", $jsonEnc);

  echo "Grades Uploaded, Go to Scores";
?>
