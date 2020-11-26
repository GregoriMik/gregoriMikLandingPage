<?PHP
	$adresat = 'kontakt@mgcodes.pl'; 	
	@$email = $_POST['email'];
	@$content = $_POST['content'];
	$header = 	"From: ktos@serwer.pl \nContent-Type:".
			' text/plain;charset="iso-8859-2"'.
			"\nContent-Transfer-Encoding: 8bit";
	if (mail($adresat, 'List ze strony', $content, $header))
		echo '<p>działa</p>';
	else 
		echo '<p><b>NIE</b> wysłano maila!</p>';
?>