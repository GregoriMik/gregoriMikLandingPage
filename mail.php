<?php
$to      = 'mako3991@o2.pl';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'MGCODES NOWY EMAIL OD ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';
mail($to, $subject, $message, $headers);

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<link href="https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro:400,600&display=swap&subset=latin-ext"
    rel="stylesheet">
<style>
body{
  background-color:black;
  background-image:url(images/background/travel.jpg);
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center top;
  color:white;
  font-family: 'Source Sans Pro', sans-serif;
  font-size:24px;
  line-height:10vh;
  text-align:center;
  text-transform:uppercase;
  letter-spacing:2px;
}

  </style>
  <title>Wysłano do @mgcodes.pl</title>
</head>
<body>
  
  
  <p>Twoja wiadomość została wysłana. Odpowiem w możliwie najkrótszym czasie.</p>
  <a href="../"><button type="button" class="btn btn-primary btn-lg btn-block">Przycisk na całą szerokość</button></a>
  
  <footer>©mgcodes</footer>
</body>
</html>