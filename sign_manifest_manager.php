 <?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
$servername = "localhost";
$username = "DSkillz";
$password = "13371985000@Bdd";
$dbname = "Neguentropia";

  // Create connection
  $mysqli = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
  }

  echo "Connected successfully";

  $mysqli->close();
  ?>