function validiraj() {
	var ime = document.getElementById('ime').value;

	if (ime == "") {
		//alert('Molimo unesite ime');
		document.getElementById('ime').style.border = "1px solid red";
	
	}


	var prezime = document.getElementById('prezime').value;
	
	if ( prezime  === "") {
		alert('Molimo unesite prezime');
	}

	var grad = document.getElementById('grad').value;

	if ( !grad ) {
		alert('Molimo unsetite grad');
	}


	var comment = document.getElementById('comment').value;

	if ( !comment ) {
		alert('Molimo unsetite komentar');
	}
 	

 	var email = document.getElementById('email').value;

	if ( !email ) {
		alert('Molimo unsetite email');
	}
 	
 	if (email.indexOf('@') == -1) {
 		alert('Niste uneli ispravnu email adresu');
 	}

 	var sifra1 = document.getElementById('sifra').value;
 	var sifra2 = document.getElementById('sifra2').value;

 	if (sifra1 != sifra2) {
 		alert('sifre se razlikuju covece');
 	}

 	var godina = document.getElementById('god').value;

 	if ( isNaN(godina) ) {
 		alert('godiste niste ispravno uneli covece');
 	}












}