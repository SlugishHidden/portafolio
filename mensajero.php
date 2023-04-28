<?php
if(isset($_POST['submit']))
{

    $para = "182318@upslp.edu.mx";
    $asunto = "Nombre";
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $headers = "MIME-Version: 1.0\r\n";
    $headers = "Content-type: text/html";
    $cuerpo = "Enviado por: $nombre\n E-mail: $correo\n Mensaje: $mensaje";

    $bool =mail($para,$asunto,$cuerpo,$headers);
}
else(
    echo "Algo salio mal...";
)
?>