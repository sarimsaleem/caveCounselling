<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "cavecounselling@outlook.com"; // Change to your email

    // Sanitize Inputs
    $firstName = htmlspecialchars(trim($_POST["firstName"]));
    $lastName = htmlspecialchars(trim($_POST["lastName"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $formSubject = htmlspecialchars(trim($_POST["subject"]));
    $message = nl2br(htmlspecialchars(trim($_POST["message"])));

    // Validate Email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid_email";
        exit;
    }

    // Combine first and last name
    $name = trim($firstName . " " . $lastName);

    // Email Headers (Enable HTML)
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // HTML Email Template (Your Template with Dynamic Data)
    $body = "
    <!doctype html>
    <html lang='en' style='height: 100%;'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0'>
        <title>Contact Form Submission</title>
    </head>
    <body style='margin: 0;'>

    <!-- Main body -->
    <div>
        <!-- Header -->
        <div style='padding: 30px 30px 15px 30px; border-bottom: 0.75px solid #f5f5dc; background-color: #f5f5dc;'>
           <div>
               <img src='https://cavecounselling.com/logo.png' alt='Cave Counselling' width='253.81' height='64.3' draggable='false'>
           </div>
        </div>

        <!-- Body -->
        <div style='padding: 25px; background-color: #5a5c47;'>
            <div style='background: #f5f5dc; border-radius: 14px;padding: 35px 20px;'>
                <h1 style='font-size: 20px; margin: 0 0 25px; font-family: Manrope, sans-serif; font-weight: 700'>
                    User Information
                </h1>
            
                <div style='margin: 0 0 25px;'>
                    <p style='margin: 0;'><strong>Name:</strong> $name</p>
                    <p style='margin: 0;'><strong>Email:</strong> $email</p>
                    <p style='margin: 0;'><strong>Subject:</strong> $formSubject</p>
                </div>

                <h3 style='font-size: 18px; margin: 0 0 25px; font-family: Manrope, sans-serif; font-weight: 700'>Message:</h3>
                <p style='font-size: 16px; font-family: Manrope, sans-serif;'>$message</p>
            </div>
        </div>

        <!-- Footer -->
        <div style='padding: 30px; text-align: center; border-top: 1px solid #f5f5dc; background-color: #f5f5dc;'>
            <p style='font-size: 14px; font-family: Manrope, sans-serif;'>This email was sent from your website contact form.</p>
        </div>

    </div>

    </body>
    </html>";

    // Send Email
    if (mail($to, $formSubject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request";
}
?>