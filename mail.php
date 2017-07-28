<?php

$to = "jparedes84@gmail.com";
$subject = "Contacto Naus Technologies";

$message = "Formulario de Contacto naus Technologies:\n\n";
$message .= "Nombre: " . $_POST['name'] . "\n";
$message .= "E-mail: " . $_POST['email'] . "\n";
$message .= "Asunto: " . $_POST['subject'] . "\n";
$message .= "Mensaje: " . $_POST['message'] . "\n\n";

$headers = 'From: jparedes84@gmail.com' . "\r\n" .
  				 'Reply-To: jparedes84@gmail.com' . "\r\n" .
  				 'X-Mailer: PHP/' . phpversion();
if (mail($to, $subject, $message, $headers)) {
	echo '<div class="title"><h4>Correo enviado con éxito</h4></div>';
}
else
{
	echo '<div class="title"><h4>El correo no ha podido enviarse.</h4></div>';
}
?>
