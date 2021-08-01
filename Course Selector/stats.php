<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="stats.css">
      <link rel="stylesheet" href="../mouse.css">

      <!-- fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap" rel="stylesheet">

    <script src="stats.js" charset="utf-8"></script>
    <title>grades</title>
  </head>
  <body>
    <div class="ball" id="ball"></div>

    <form id="exitButton"  method="post">
      <button type="submit" name="button" class="exit">Exit</button>
    </form>
    <h1>Grades</h1>
    <hr>

    <?php
    if(isset($_POST['buttonG'])){
      $username = $_POST["userName"];



      $json = file_get_contents("../Data/accounts.json");
      $json_data = json_decode($json, true);

      foreach ($json_data as $key1 => $value1) {

        foreach ($json_data[$key1] as $key2 => $value1) {
          if($json_data[$key1][$key2]['name'] == $username){
            $easyEnglish = $json_data[$key1][$key2]['English']['easy'];
            $mediumEnglish = $json_data[$key1][$key2]['English']['medium'];
            $hardEnglish = $json_data[$key1][$key2]['English']['hard'];

            $easyMath = $json_data[$key1][$key2]['Math']['easy'];
            $mediumMath = $json_data[$key1][$key2]['Math']['medium'];
            $hardMath = $json_data[$key1][$key2]['Math']['hard'];

          }
        }
      }
    }
    ?>
    <div class="largeDiv">
      <div class="engDiv">
        <h2>English</h2>
        <hr>
        <h3 class="easy">Easy</h3>
        <?php foreach ($easyEnglish as $item) {
          echo "<li>". $item ."</li>";
        } ?>

        <h3 class="medium">Medium</h3>
        <?php foreach ($mediumEnglish as $item) {
          echo "<li>". $item ."</li>";
        } ?>

        <h3 class="hard">Hard</h3>
        <?php foreach ($hardEnglish as $item) {
          echo "<li>". $item ."</li>";
        } ?>
      </div>


      <div class="mathDiv">
        <h2>Math</h2>
        <hr>
        <h3 class="easy">Easy</h3>
        <?php foreach ($easyMath as $item) {
          echo "<li>". $item ."</li>";
        } ?>

        <h3 class="medium">Medium</h3>
        <?php foreach ($mediumMath as $item) {
          echo "<li>". $item ."</li>";
        } ?>

        <h3 class="hard">Hard</h3>
        <?php foreach ($hardMath as $item) {
          echo "<li>". $item ."</li>";
        } ?>

      </div>

        <?php
        function getAvg($list){
          $length = count($list);
          $total = 0;
          foreach ($list as $key) {
            $total += $key;
          }
          if($length != 0){
            $avg = $total/$length;
            echo round($avg,2);
          }else{
            echo 0;
          }
        }
         ?>

      <div class="avgDiv">
        <h2>Averages</h2>
        <hr>
        <h3>English</h3>
        <?php
        echo "Easy: ";
        getAvg($easyEnglish);
        echo "<br />";
        echo "Medium: ";
        getAvg($mediumEnglish);
        echo "<br />";
        echo "Hard: ";
        getAvg($hardEnglish);
        echo "<br />";
        echo "Total: ";
        $appended = array_merge($easyEnglish, $mediumEnglish, $hardEnglish);
        getAvg($appended);
         ?>
        <h3>Math</h3>

          <?php
          echo "Easy: ";
          getAvg($easyMath);
          echo "<br />";
          echo "Medium: ";
          getAvg($mediumMath);
          echo "<br />";
          echo "Hard: ";
          getAvg($hardMath);
          echo "<br />";
          echo "Total: ";
          $appended = array_merge($easyMath, $mediumMath, $hardMath);
          getAvg($appended);
           ?>
        <h3>Total</h3>
        <?php
        $appended = array_merge($easyMath, $mediumMath, $hardMath, $easyEnglish, $mediumEnglish, $hardEnglish);
        getAvg($appended); ?>

      </div>
    </div>

    <p id="hiddenName"><?php echo $username ?></p>


<script src="../mouse.js" charset="utf-8"></script>
  </body>
</html>
