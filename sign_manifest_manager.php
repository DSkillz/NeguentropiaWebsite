<?php

$servername = "172.16.54.127:3306"
$username = "Neguen";
$password = "13371985000@Bdd";
$dbname = "Neguentropia";

try {
    $bdd = new PDO("mysql:host=$servername;dbname=signmanifest", $username, $password);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
} catch(PDOException $e) {
    echo "Erreur : ".$e->getMessage();
}