<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = file_get_contents("php://input");
$_POST = json_decode($data, true);

$errors = [];
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (empty($_POST["email"])) {
        $errors[] = "Email is empty";
    } else {
        $email = $_POST["email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Invalid email";
        }
    }

    if (empty($_POST["name"])) {
        $errors[] = "Name is empty";
    } else {
        $name = $_POST["name"];
    }

    if (empty($_POST["subject"])) {
        $errors[] = "Subject is empty";
    } else {
        $subject = $_POST["subject"];
    }

    if (empty($_POST["message"])) {
        $errors[] = "Message is empty";
    } else {
        $message = $_POST["message"];
    }

    if (empty($errors)){
        $emailBody = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>$name is contacting you</title>
        </head>
        <body style="background-color: azure">
            <div style="padding: 20px">
                Email: <span style="color: #888">$email</span>
                Subject: <span style="color: #888">$subject</span>
                Message: <span style="color: #888">$message</span>
            </div>
        </body>
        </html>
        ';

        $headers = 	'From: Contact Form of Portfolio-app' . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "MIME-Version: 1.0\r\n" . 
        "Content-Type: text/html; charset=UTF-8\r\n";

        $to = "coldsoulrusirk@gmail.com";
        mail($to, $subject, $emailBody, $headers);
    }
}
?>


