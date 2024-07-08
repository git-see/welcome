<?php
if (isset($_POST['sendMsg'])) {
    if (
        isset($_POST['agency']) && !empty($_POST['agency'])
        && isset($_POST['lastname']) && !empty($_POST['lastname'])
        && isset($_POST['email']) && !empty($_POST['email'])
        && isset($_POST['contentMsg']) && !empty($_POST['contentMsg'])
    ) {

        require_once('connexionDB.php');

        $agency = strip_tags(stripslashes(htmlentities(trim($_POST['agency']))));
        $lastname = strip_tags(stripslashes(htmlentities(trim($_POST['lastname']))));
        $email = strip_tags(stripslashes(htmlentities(trim($_POST['email']))));
        $contentMsg = strip_tags(stripslashes(htmlentities(trim($_POST['contentMsg']))));

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            $sql = 'INSERT INTO `form`(`agency`, `lastname`, `email`, `contentMsg`) VALUES (:agency, :lastname, :email, :contentMsg);';

            $query = $db->prepare($sql);

            $query->bindValue(':agency', $agency, PDO::PARAM_STR);
            $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
            $query->bindValue(':email', $email, PDO::PARAM_STR);
            $query->bindValue(':contentMsg', $contentMsg, PDO::PARAM_STR);

            $query->execute();
        } else {
            require_once('deconnexionDB.php');
            header('Location: /pages/form.php');
            die();
        }

        header('Location: /pages/form.php');
    } else {
        require_once('deconnexionDB.php');
        header('Location: /pages/form.php');
        die();
    }
    //  Button not used
} else {
    require_once('deconnexionDB.php');
    header("Location: /pages/form.php");
    die();
}
