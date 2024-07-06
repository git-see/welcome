<?php
$servername = "localhost";
$database = "welcome";
$username = "root";
$password = "";
try {
    $db = new PDO("mysql:host=$servername;dbname=$database;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
} catch (PDOException $e) {
    echo "Connexion error ! :" . $e->getMessage();
    die();
};
