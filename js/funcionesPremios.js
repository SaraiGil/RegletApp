var ptsSumasFinal;
var ptsNaipesFinal;
$(document).ready(function(){
  user = window.localStorage.getItem('usuario')
  nombre = document.getElementById("user");
  nombre.innerHTML="Hola "+ user +", estos son tus premios"
  sumas = parseInt(window.localStorage.getItem('puntajeSumas'));
  console.log(sumas);
  naipes = parseInt(window.localStorage.getItem('puntajeNaipes'));
  console.log(naipes);
  sinPremiosS = document.getElementById("sinPremiosS");
  sinPremiosN = document.getElementById("sinPremiosN");
  premioS1 = document.getElementById("SPremio1");
  premioS2 = document.getElementById("SPremio2");
  premioS3 = document.getElementById("SPremio3");
  premioS4 = document.getElementById("SPremio4");
  premioN1 = document.getElementById("NPremio1");
  premioN2 = document.getElementById("NPremio2");
  premioN3 = document.getElementById("NPremio3");
  premioN4 = document.getElementById("NPremio4");
  txtPuntajeS = document.getElementById("PremiosSFinal");
  txtPuntajeN = document.getElementById("PremiosNFinal");
  if (isNaN(sumas)) {
    txtPuntajeS.innerHTML = "Sumas - 0pts.";
  }else {
    txtPuntajeS.innerHTML = "Sumas - "+sumas+"pts.";
  }
  if (isNaN(naipes)) {
    txtPuntajeN.innerHTML = "Naipes - 0pts.";
  }else {
    txtPuntajeN.innerHTML = "Naipes - "+naipes+"pts.";
  }



  if (sumas < 50) {
    ptsSumasFinal = 1;
  } else if (sumas >= 50 && sumas < 80) {
    ptsSumasFinal = 2;
  } else if (sumas >= 80 && sumas < 110) {
    ptsSumasFinal = 3;
  } else if (sumas >= 110 && sumas < 130) {
    ptsSumasFinal = 4;
  } else if (sumas >= 130 && sumas < 150) {
    ptsSumasFinal = 5;
  }

  if (naipes < 50) {
    ptsNaipesFinal = 1;
  } else if (naipes >= 50 && naipes < 80) {
    ptsNaipesFinal = 2;
  } else if (naipes >= 80 && naipes < 110) {
    ptsNaipesFinal = 3;
  } else if (naipes >= 110 && naipes < 130) {
    ptsNaipesFinal = 4;
  } else if (naipes >= 130 && naipes < 150) {
    ptsNaipesFinal = 5;
  }


  //Sumas
  switch (ptsSumasFinal) {
 //----------NO PREMIOS PUNTOS < 50---------
    case 1:
	    premioS1.style.display = "none";
   	  premioS2.style.display = "none";
    	premioS3.style.display = "none";
    	premioS4.style.display = "none";
      break;
//---------- PREMIO 1 - PUNTOS DE 50 A 79 -------
    case 2:
    	sinPremiosS.style.display = "none";
    	premioS1.style.display = "block";
   	  premioS2.style.display = "none";
    	premioS3.style.display = "none";
    	premioS4.style.display = "none";

      break;
//---------- PREMIO 2 - PUNTOS DE 80 A 109 -------
    case 3:
    	sinPremiosS.style.display = "none";
    	premioS1.style.display = "block";
     	premioS2.style.display = "block";
    	premioS3.style.display = "none";
    	premioS4.style.display = "none";

      break;
//---------- PREMIO 3 - PUNTOS DE 110 A 129 -------
    case 4:
    	sinPremiosS.style.display = "none";
    	premioS1.style.display = "block";
     	premioS2.style.display = "block";
    	premioS3.style.display = "block";
    	premioS4.style.display = "none";

      break;
//---------- PREMIO 4 - PUNTOS DE 130 A 150 -------
    case 5:
    	sinPremiosS.style.display = "none";
    	premioS1.style.display = "block";
     	premioS2.style.display = "block";
    	premioS3.style.display = "block";
    	premioS4.style.display = "block";
      break;
    default:

  }

  //Naipes
  switch (ptsNaipesFinal) {
 //----------NO PREMIOS PUNTOS < 50---------
    case 1:
      premioN1.style.display = "none";
      premioN2.style.display = "none";
      premioN3.style.display = "none";
      premioN4.style.display = "none";
      break;
//---------- PREMIO 1 - PUNTOS DE 50 A 79 -------
    case 2:
      sinPremiosN.style.display = "none";
      premioN1.style.display = "block";
      premioN2.style.display = "none";
      premioN3.style.display = "none";
      premioN4.style.display = "none";

      break;
//---------- PREMIO 2 - PUNTOS DE 80 A 109 -------
    case 3:
      sinPremiosN.style.display = "none";
      premioN1.style.display = "block";
      premioN2.style.display = "block";
      premioN3.style.display = "none";
      premioN4.style.display = "none";

      break;
//---------- PREMIO 3 - PUNTOS DE 110 A 129 -------
    case 4:
      sinPremiosN.style.display = "none";
      premioN1.style.display = "block";
      premioN2.style.display = "block";
      premioN3.style.display = "block";
      premioN4.style.display = "none";

      break;
//---------- PREMIO 4 - PUNTOS DE 130 A 150 -------
    case 5:
      sinPremiosN.style.display = "none";
      premioN1.style.display = "block";
      premioN2.style.display = "block";
      premioN3.style.display = "block";
      premioN4.style.display = "block";
      break;
    default:

  }


});
