<?php

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                 			// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'naustec@gmail.com';                // SMTP username
$mail->Password = 'aries640';                         // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($_POST['email'], $_POST['name']);					         // Origen
$mail->addAddress('naustec@gmail.com', 'Naus Technologies');    // Destino

$mail->addAttachment($_FILES['curriculum']['tmp_name'], $_FILES['curriculum']['name']);          //Add attachments
$mail->addAttachment($_FILES['document']['tmp_name'], $_FILES['document']['name']);          //Add attachments

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject  = 'Formulario Contacto Naus Technologies';
$mail->Body     = '<strong>Comentario de Cliente:</strong> <br><br>';
$mail->Body    .= '<strong>Nombre: </strong>' . $_POST['name'] . '<br><br>';
$mail->Body    .= '<strong>E-mail: </strong>' . $_POST['email'] . '<br><br>';
$mail->Body    .= '<strong>Asunto: </strong>' . $_POST['subject'] . '<br><br>';
$mail->Body    .= '<strong>Mensaje: </strong><br>' . $_POST['message'];
//$mail->AltBody  = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
