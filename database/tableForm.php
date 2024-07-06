<?php
$servername = "localhost";
$database = "welcome";
$username = "root";
$password = "";
try {
    $db = new PDO("mysql:host=$servername;dbname=$database;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "CREATE TABLE `form`(
                        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        agency VARCHAR (100) NOT NULL COLLATE utf8mb4_general_ci,
                        lastname VARCHAR (100) NOT NULL COLLATE utf8mb4_general_ci,
                        email VARCHAR (100) NOT NULL COLLATE utf8mb4_general_ci,
                        contentMsg VARCHAR (500) NOT NULL COLLATE utf8mb4_general_ci)";
    $db->exec($sql);
    echo 'The "form" table is well created !';
} catch (PDOException $e) {
    echo "Connexion error : " . $e->getMessage();
};
