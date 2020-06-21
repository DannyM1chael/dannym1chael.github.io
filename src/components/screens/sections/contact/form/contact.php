<?php
    $post = (!empty($_POST)) ? true : false;
    if($post){
        $email = trim($_POST['email']);
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        $error = '';
        echo 'test';
    }
?>