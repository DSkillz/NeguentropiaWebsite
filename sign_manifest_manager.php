<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
function debug_to_console($data)
{
  $output = $data;
  if (is_array($output))
    $output = implode(',', $output);

  echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

$servername = "localhost";
$username = "DSkillz";
$password = "13371985000@Bdd";
$dbname = "Neguentropia";

// Create connection
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Check connection
//Afficher toute erreur de connexion
if ($mysqli->connect_error) {
  die('Error : (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
} else {
  debug_to_console("Connected successfully");
};


// Check if submit button is clicked
if (isset($_POST['sign'])) {

  var_dump($_POST);
  echo "dump terminé!";
  echo "<br>";

  $firstname = $_POST['lastname'];
  $lastname  = $_POST['firstname'];
  $expertise = $_POST['expertise'];
  $labo  = $_POST['labo'];
  $location = $_POST['location'];
  $website  = $_POST['website'];
  $photo = $_POST['photo'];
  $linkedin = $_POST['linkedin'];
  $mail  = $_POST['mail'];

} else {
  debug_to_console("No data submitted");
  exit;
};

$sql = "INSERT INTO manifest (lastname, firstname, expertise, labo, location, website, photo, linkedin, mail) VALUES ('$lastname', '$firstname', '$expertise', '$labo', '$location', '$website', '$photo', '$linkedin', '$mail')";

// $sql = "SELECT * FROM manifest";
// $result = $mysqli->query($sql);

// if ($result->num_rows > 0) {
//   // Output data of each row
//   while($row = $result->fetch_assoc()) {
//     echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Firstname: " . $row["version"]. "<br>";
//   }
// }

if ($mysqli->query($sql) === TRUE) {
    debug_to_console("New record created successfully");
  } else {
    debug_to_console("ERROR: Could not able to execute $sql. " . mysqli_error($mysqli));
  };

// close connection
$mysqli->close();

?>