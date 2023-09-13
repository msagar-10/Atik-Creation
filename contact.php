<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $subject = $_POST["Subject"];
    $message = $_POST["message"];
    $note = $_POST["note"];

    // Basic email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Compose the email message
    $mailMessage = "
    Name: $name<br>
    Email: $email<br>
    Subject: $subject<br>
    Message: $message<br>
    Extra Note: $note
    ";

    $to = "mhossainsagar10@gmail.com"; // Replace with your email address

    // Send the email
    $mailSent = mail($to, $subject, $mailMessage, $headers);

    if ($mailSent) {
        echo "Thank you for contacting us!";
    } else {
        echo "Oops! Something went wrong, please try again later.";
    }
}
?>
