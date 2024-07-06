<?php
$servername = 'localhost';
$username = 'root';
$password = '';
try {
    $db = new PDO("mysql:host=$servername", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "CREATE DATABASE welcome";

    $db->exec($query);
    echo 'Database "welcome" is well created !';
} catch (PDOException $e) {
    echo "Connexion error ! " . $e->getMessage();
};
