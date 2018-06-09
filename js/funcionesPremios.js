$(document).ready(function(){
  user = JSON.parse(localStorage.getItem('usuario'))
  nombre = document.getElementById("user");
  nombre.innerHTML="Hola "+ user +", estos son tus premios"
  sumas = parseInt(localStorage.getItem('puntajeSumas'));
  console.log(sumas);
  naipes = parseInt(localStorage.getItem('puntajeNaipes'));
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

  //Sumas
  if (sumas < 50 || naipes < 50) {
    premioS1.style.display = "none";
    premioS2.style.display = "none";
    premioS3.style.display = "none";
    premioS4.style.display = "none";
    premioN1.style.display = "none";
    premioN2.style.display = "none";
    premioN3.style.display = "none";
    premioN4.style.display = "none";

  } else if ((sumas >=50 && sumas < 80)||(naipes >=50 && naipes < 80)) {
    sinPremiosS.style.display = "none";
    sinPremiosN.style.display = "none";
    premioS1.style.display = "block";
    premioS2.style.display = "none";
    premioS3.style.display = "none";
    premioS4.style.display = "none";
    premioN1.style.display = "block";
    premioN2.style.display = "none";
    premioN3.style.display = "none";
    premioN4.style.display = "none";

  } else if ((sumas >=80 && sumas < 110)||(naipes >=80 && naipes < 110)) {
    sinPremiosS.style.display = "none";
    sinPremiosN.style.display = "none";
    premioS1.style.display = "block";
    premioS2.style.display = "block";
    premioS3.style.display = "none";
    premioS4.style.display = "none";
    premioN1.style.display = "block";
    premioN2.style.display = "block";
    premioN3.style.display = "none";
    premioN4.style.display = "none";

  } else if ((sumas >=110 && sumas < 150)||(naipes >=110 && naipes < 150)) {
    sinPremiosS.style.display = "none";
    sinPremiosN.style.display = "none";
    premioS1.style.display = "block";
    premioS2.style.display = "block";
    premioS3.style.display = "block";
    premioS4.style.display = "none";
    premioN1.style.display = "block";
    premioN2.style.display = "block";
    premioN3.style.display = "block";
    premioN4.style.display = "none";

  } else if (sumas >=150 || naipes >=150) {
    sinPremiosS.style.display = "none";
    sinPremiosN.style.display = "none";
    premioS1.style.display = "block";
    premioS2.style.display = "block";
    premioS3.style.display = "block";
    premioS4.style.display = "block";
    premioN1.style.display = "block";
    premioN2.style.display = "block";
    premioN3.style.display = "block";
    premioN4.style.display = "block";

  }
});
