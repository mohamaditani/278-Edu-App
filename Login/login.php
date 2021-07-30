
<?php
echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
echo '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap" rel="stylesheet">';
echo "<link rel='stylesheet' type='text/css' href='php.css'>";

if(isset($_POST['buttonLogin'])){
  $username = $_POST["loginUsernameField"];
  $password = $_POST["loginPasswordField"];

  $json = file_get_contents("../Data/accounts.json");
  $json_data = json_decode($json, true);

  $not_found = true;
  foreach ($json_data as $key1 => $value1) {

          foreach ($json_data[$key1] as $key2 => $value1) {
            if($json_data[$key1][$key2]['name'] == $username){
              $not_found = false;
              if($json_data[$key1][$key2]['password'] == $password){
?>
              <script type="text/javascript">

                window.location.href = "../Course%20Selector/Selector.html?name=<?php echo $username ?>" ;

              </script>
<?php
                // header("Location: ../Course Selector/Selector.html");
              }else{

                echo("<h1>
                  Wrong Password!
                </h1>");
                echo '<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" draggable = "false"/>';
                echo("<h1>
                Go back!
                </h1>");
              }
            }
          }
          if($not_found){
            echo("<h1>
              Wrong Username!
            </h1>");
            echo '<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" draggable = "false"/>';
            echo("<h1>
            Go back!
            </h1>");
          }
        }
      }

if(isset($_POST['buttonSignup'])){
  $username = $_POST["signUsernameField"];
  $password = $_POST["signPasswordField"];
  $passwordRep = $_POST["signPasswordRepField"];

  $x = true;

  if($password != $passwordRep){
    echo("<h1>
      Passwords not identical!
    </h1>");
    $x = false;
  }

  $json = file_get_contents("../Data/accounts.json");
  $json_data = json_decode($json, true);

  $not_found = true;
  foreach ($json_data as $key1 => $value1) {

          foreach ($json_data[$key1] as $key2 => $value1) {
            if($json_data[$key1][$key2]['name'] == $username){
              $not_found = false;
            }
          }
        }
  if($not_found == true && $x == true){

    $data = array (
  'name' => $username,
  'password' => $password,
  'English' =>
  array (
    'easy' =>
    array (
    ),
    'medium' =>
    array (
    ),
    'hard' =>
    array (
    ),
  ),
  'Math' =>
  array (
    'easy' =>
    array (
    ),
    'medium' =>
    array (
    ),
    'hard' =>
    array (
    ),
  ),
);

// $post_data = json_encode($data);
  $tempArray = $data;
  // $jsonData = json_encode($tempArray);
     array_push($json_data['users'], $tempArray);
     $jsonEnc = json_encode($json_data);
    file_put_contents("../Data/accounts.json", $jsonEnc);

    header("Location: login.html");

  }elseif ($not_found == false) {
    echo("<h1>
      Username Already Exists
    </h1>");
    echo '<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" draggable = "false"/>';
    echo("<h1>
    Go back!
    </h1>");
  }




}



// array_push($json_data, $data);
// $jsonData = json_encode($tempArray);
// file_put_contents('results.json', $jsonData);
