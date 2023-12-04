<?php
  $host_name = 'db5013913910.hosting-data.io';
  $database = 'dbs11634922';
  $user_name = 'dbu109852';
  $password = '5d38ff9ae0d67043d1333a5109bebe4e';

  $link = new mysqli($host_name, $user_name, $password, $database);

  if ($link->connect_error) {
    die('<p>La connexion au serveur MySQL a échoué: '. $link->connect_error .'</p>');
  } else {
    echo '<p>Connexion au serveur MySQL établie avec succès.</p>';
  }

  $user = $_POST['user'];
  $pass = $_POST['pass'];
  
  if ($user == "tony") {
    echo "HI " . $user;
  } else {
    echo "I don't know you.";
  }

?>