function checkEmpty(element){
    if(element.val() == ""){
        return true;
    }else{
        return false;
    }
}

function notificacionReg(texto, titulo){
  $("#ventana").css("top","60px");
  $("#texto").html(titulo);
  $("#texto-p").html(texto);
  setTimeout(function(){
   $("#ventana").css("top","-100%");
 }, 3500);
}

function Login(){
  user = document.getElementById("username").value
  if(user != ''){
    localStorage.setItem('usuario' , JSON.stringify(user))
    nuevoUsuario = JSON.parse(localStorage.getItem("usuario"))
  	console.log(nuevoUsuario)
    notificacionReg(nuevoUsuario,"Bienvenido");
    setTimeout(function(){window.location.href = 'views/inicio.html'; },2000);

  } else{
    notificacionReg("Ingresa un nombre","Recuerda")
    /*alert("Ingresa un nombre :)")*/

  }
}

function removeStorage(){
  localStorage.removeItem('puntaje');
  localStorage.removeItem('usuario');
}

// $('#pestSalir').click(function () {
//   removeStorage();
//   console.log(parseInt(localstorage.getItem("puntaje")));
// });

// $('a#pestSalir').click(function(){
//   removeStorage();
//   setTimeout(function(){window.location.href = '../index.html'; },2000);
// });

function randomMulti(array) {
  var number = array[Math.floor(Math.random()*array.length)];
  //Math.floor(Math.random() * 36);
  return number;
}

function returnRandom(numeroRandom) {
  switch (numeroRandom) {
    case "cuatro":
      return 4
      break;
    case "seis":
      return 6
      break;
    case "ocho":
      return 8
      break;
    case "diez":
      return 10
      break;
    case "doce":
      return 12
      break;
    case "catorce":
      return 14
      break;
    case "dieciseis":
      return 16
      break;
    case "dieciocho":
      return 18
      break;
    case "veinte":
      return 20
      break;
    case "nueve":
      return 9
      break;
    case "quince":
      return 15
      break;
    case "veintiuno":
      return 21
      break;
    case "veinticuatro":
      return 24
      break;
    case "veintisiete":
      return 27
      break;
    case "treinta":
      return 30
      break;
    case "veintiocho":
      return 28
      break;
    case "treintaydos":
      return 32
      break;
    case "treintayseis":
      return 36
      break;
    case "cuarenta":
      return 40
      break;
    case "veinticinco":
      return 25
      break;
    case "treintaycinco":
      return 35
      break;
    case "cuarentaycinco":
      return 45
      break;
    case "cincuenta":
      return 50
      break;
    case "cuarentaydos":
      return 42
      break;
    case "cuarentayocho":
      return 48
      break;
    case "cincuentaycuatro":
      return 54
      break;
    case "sesenta":
      return 60
      break;
    case "cuarentaynueve":
      return 49
      break;
    case "cincuentayseis":
      return 56
      break;
    case "sesentaytres":
      return 63
      break;
    case "setenta":
      return 70
      break;
    case "sesentaycuatro":
      return 64
      break;
    case "setentaydos":
      return 72
      break;
    case "ochenta":
      return 80
      break;
    case "ochentayuno":
      return 81
      break;
    case "noventa":
      return 90
      break;
    case "cien":
      return 100
      break;
    default:

  }
}

function randomRegletas() {
  var number = Math.floor(Math.random() * 9)+2;
  return number;
}

function randomSumas() {
  var number = Math.floor(Math.random() * 9)+1;
  return number;
}

function rellenoNaipeIA(valor){
  switch (valor) {
    case "2":
      document.getElementById("izq1").style.background = "#ff1a1a"
      document.getElementById("izq1").style.border = "1px solid #ff1a1a"
      document.getElementById("naipeIzq1").style.color = "#FFFFFF"
      break;
    case "3":
      document.getElementById("izq1").style.background = "#47d147"
      document.getElementById("izq1").style.border = "1px solid #47d147"
      document.getElementById("naipeIzq1").style.color = "#000000"
      break;
    case "4":
      document.getElementById("izq1").style.background = "#ff6699"
      document.getElementById("izq1").style.border = "1px solid #ff6699"
      document.getElementById("naipeIzq1").style.color = "#000000"
      break;
    case "5":
      document.getElementById("izq1").style.background = "#ffd11a"
      document.getElementById("izq1").style.border = "1px solid #ffd11a"
      document.getElementById("naipeIzq1").style.color = "#000000"
      break;
    case "6":
      document.getElementById("izq1").style.background = "#006622"
      document.getElementById("izq1").style.border = "1px solid #006622"
      document.getElementById("naipeIzq1").style.color = "#FFFFFF"
      break;
    case "7":
      document.getElementById("izq1").style.background = "#000000"
      document.getElementById("izq1").style.border = "1px solid #000000"
      document.getElementById("naipeIzq1").style.color = "#FFFFFF"
      break;
    case "8":
      document.getElementById("izq1").style.background = "#734d26"
      document.getElementById("izq1").style.border = "1px solid #734d26"
      document.getElementById("naipeIzq1").style.color = "#FFFFFF"
      break;
    case "9":
      document.getElementById("izq1").style.background = "#3333ff"
      document.getElementById("izq1").style.border = "1px solid #3333ff"
      document.getElementById("naipeIzq1").style.color = "#FFFFFF"
      break;
    case "10":
      document.getElementById("izq1").style.background = "#ff751a"
      document.getElementById("izq1").style.border = "1px solid #ff751a"
      document.getElementById("naipeIzq1").style.color = "#000000"
      break;
    default:

  }
}

function rellenoNaipeDA(valor){
  switch (valor) {
    case "2":
      document.getElementById("der1").style.background = "#ff1a1a"
      document.getElementById("der1").style.border = "1px solid #ff1a1a"
      document.getElementById("naipeDer1").style.color = "#FFFFFF"
      break;
    case "3":
      document.getElementById("der1").style.background = "#47d147"
      document.getElementById("der1").style.border = "1px solid #47d147"
      document.getElementById("naipeDer1").style.color = "#000000"
      break;
    case "4":
      document.getElementById("der1").style.background = "#ff6699"
      document.getElementById("der1").style.border = "1px solid #ff6699"
      document.getElementById("naipeDer1").style.color = "#000000"
      break;
    case "5":
      document.getElementById("der1").style.background = "#ffd11a"
      document.getElementById("der1").style.border = "1px solid #ffd11a"
      document.getElementById("naipeDer1").style.color = "#000000"
      break;
    case "6":
      document.getElementById("der1").style.background = "#006622"
      document.getElementById("der1").style.border = "1px solid #006622"
      document.getElementById("naipeDer1").style.color = "#FFFFFF"
      break;
    case "7":
      document.getElementById("der1").style.background = "#000000"
      document.getElementById("der1").style.border = "1px solid #000000"
      document.getElementById("naipeDer1").style.color = "#FFFFFF"
      break;
    case "8":
      document.getElementById("der1").style.background = "#734d26"
      document.getElementById("der1").style.border = "1px solid #734d26"
      document.getElementById("naipeDer1").style.color = "#FFFFFF"
      break;
    case "9":
      document.getElementById("der1").style.background = "#3333ff"
      document.getElementById("der1").style.border = "1px solid #3333ff"
      document.getElementById("naipeDer1").style.color = "#FFFFFF"
      break;
    case "10":
      document.getElementById("der1").style.background = "#ff751a"
      document.getElementById("der1").style.border = "1px solid #ff751a"
      document.getElementById("naipeDer1").style.color = "#000000"
      break;
    default:

  }
}

function rellenoNaipeIB(valor){
  switch (valor) {
    case "2":
      document.getElementById("izq2").style.background = "#ff1a1a"
      document.getElementById("izq2").style.border = "1px solid #ff1a1a"
      document.getElementById("naipeIzq2").style.color = "#FFFFFF"
      break;
    case "3":
      document.getElementById("izq2").style.background = "#47d147"
      document.getElementById("izq2").style.border = "1px solid #47d147"
      document.getElementById("naipeIzq2").style.color = "#000000"
      break;
    case "4":
      document.getElementById("izq2").style.background = "#ff6699"
      document.getElementById("izq2").style.border = "1px solid #ff6699"
      document.getElementById("naipeIzq2").style.color = "#000000"
      break;
    case "5":
      document.getElementById("izq2").style.background = "#ffd11a"
      document.getElementById("izq2").style.border = "1px solid #ffd11a"
      document.getElementById("naipeIzq2").style.color = "#000000"
      break;
    case "6":
      document.getElementById("izq2").style.background = "#006622"
      document.getElementById("izq2").style.border = "1px solid #006622"
      document.getElementById("naipeIzq2").style.color = "#FFFFFF"
      break;
    case "7":
      document.getElementById("izq2").style.background = "#000000"
      document.getElementById("izq2").style.border = "1px solid #000000"
      document.getElementById("naipeIzq2").style.color = "#FFFFFF"
      break;
    case "8":
      document.getElementById("izq2").style.background = "#734d26"
      document.getElementById("izq2").style.border = "1px solid #734d26"
      document.getElementById("naipeIzq2").style.color = "#FFFFFF"
      break;
    case "9":
      document.getElementById("izq2").style.background = "#3333ff"
      document.getElementById("izq2").style.border = "1px solid #3333ff"
      document.getElementById("naipeIzq2").style.color = "#FFFFFF"
      break;
    case "10":
      document.getElementById("izq2").style.background = "#ff751a"
      document.getElementById("izq2").style.border = "1px solid #ff751a"
      document.getElementById("naipeIzq2").style.color = "#000000"
      break;
    default:

  }
}

function rellenoNaipeDB(valor){
  switch (valor) {
    case "2":
      document.getElementById("der2").style.background = "#ff1a1a"
      document.getElementById("der2").style.border = "1px solid #ff1a1a"
      document.getElementById("naipeDer2").style.color = "#FFFFFF"
      break;
    case "3":
      document.getElementById("der2").style.background = "#47d147"
      document.getElementById("der2").style.border = "1px solid #47d147"
      document.getElementById("naipeDer2").style.color = "#000000"
      break;
    case "4":
      document.getElementById("der2").style.background = "#ff6699"
      document.getElementById("der2").style.border = "1px solid #ff6699"
      document.getElementById("naipeDer2").style.color = "#000000"
      break;
    case "5":
      document.getElementById("der2").style.background = "#ffd11a"
      document.getElementById("der2").style.border = "1px solid #ffd11a"
      document.getElementById("naipeDer2").style.color = "#000000"
      break;
    case "6":
      document.getElementById("der2").style.background = "#006622"
      document.getElementById("der2").style.border = "1px solid #006622"
      document.getElementById("naipeDer2").style.color = "#FFFFFF"
      break;
    case "7":
      document.getElementById("der2").style.background = "#000000"
      document.getElementById("der2").style.border = "1px solid #000000"
      document.getElementById("naipeDer2").style.color = "#FFFFFF"
      break;
    case "8":
      document.getElementById("der2").style.background = "#734d26"
      document.getElementById("der2").style.border = "1px solid #734d26"
      document.getElementById("naipeDer2").style.color = "#FFFFFF"
      break;
    case "9":
      document.getElementById("der2").style.background = "#3333ff"
      document.getElementById("der2").style.border = "1px solid #3333ff"
      document.getElementById("naipeDer2").style.color = "#FFFFFF"
      break;
    case "10":
      document.getElementById("der2").style.background = "#ff751a"
      document.getElementById("der2").style.border = "1px solid #ff751a"
      document.getElementById("naipeDer2").style.color = "#000000"
      break;
    default:

  }
}

function rellenoSuma(valor){
  switch (valor) {
    case 1:
      document.getElementById("izq").style.background = "#FFFFFF"
      document.getElementById("izq").style.border = "1px solid #FFFFFF"
      document.getElementById("izq").style.width = "14%"
      document.getElementById("izq").setAttribute('data-id','1')
      document.getElementById("der").style.background = "#3333ff"
      document.getElementById("der").style.border = "1px solid #3333ff"
      document.getElementById("der").style.width = "86%"
      document.getElementById("der").setAttribute('data-id','9')
      break;
    case 2:
      document.getElementById("izq").style.background = "#ff1a1a"
      document.getElementById("izq").style.border = "1px solid #ff1a1a"
      document.getElementById("izq").style.width = "22%"
      document.getElementById("izq").setAttribute('data-id','2')
      document.getElementById("der").style.background = "#734d26"
      document.getElementById("der").style.border = "1px solid #734d26"
      document.getElementById("der").style.width = "78%"
      document.getElementById("der").setAttribute('data-id','8')
      break;
    case 3:
      document.getElementById("izq").style.background = "#47d147"
      document.getElementById("izq").style.border = "1px solid #47d147"
      document.getElementById("izq").style.width = "30%"
      document.getElementById("izq").setAttribute('data-id','3')
      document.getElementById("der").style.background = "#000000"
      document.getElementById("der").style.border = "1px solid #000000"
      document.getElementById("der").style.width = "70%"
      document.getElementById("der").setAttribute('data-id','7')
      break;
    case 4:
      document.getElementById("izq").style.background = "#ff6699"
      document.getElementById("izq").style.border = "1px solid #ff6699"
      document.getElementById("izq").style.width = "40%"
      document.getElementById("izq").setAttribute('data-id','4')
      document.getElementById("der").style.background = "#006622"
      document.getElementById("der").style.border = "1px solid #006622"
      document.getElementById("der").style.width = "60%"
      document.getElementById("der").setAttribute('data-id','6')
      break;
    case 5:
      document.getElementById("izq").style.background = "#ffd11a"
      document.getElementById("izq").style.border = "1px solid #D8AD00"
      document.getElementById("izq").style.width = "50%"
      document.getElementById("izq").setAttribute('data-id','5')
      document.getElementById("der").style.background = "#ffd11a"
      document.getElementById("der").style.border = "1px solid #D8AD00"
      document.getElementById("der").style.width = "50%"
      document.getElementById("der").setAttribute('data-id','5')
      break;
    case 6:
      document.getElementById("izq").style.background = "#006622"
      document.getElementById("izq").style.border = "1px solid #006622"
      document.getElementById("izq").style.width = "60%"
      document.getElementById("izq").setAttribute('data-id','6')
      document.getElementById("der").style.background = "#ff6699"
      document.getElementById("der").style.border = "1px solid #ff6699"
      document.getElementById("der").style.width = "40%"
      document.getElementById("der").setAttribute('data-id','4')
      break;
    case 7:
      document.getElementById("izq").style.background = "#000000"
      document.getElementById("izq").style.border = "1px solid #000000"
      document.getElementById("izq").style.width = "70%"
      document.getElementById("izq").setAttribute('data-id','7')
      document.getElementById("der").style.background = "#47d147"
      document.getElementById("der").style.border = "1px solid #47d147"
      document.getElementById("der").style.width = "30%"
      document.getElementById("der").setAttribute('data-id','3')
      break;
    case 8:
      document.getElementById("izq").style.background = "#734d26"
      document.getElementById("izq").style.border = "1px solid #734d26"
      document.getElementById("izq").style.width = "78%"
      document.getElementById("izq").setAttribute('data-id','8')
      document.getElementById("der").style.background = "#ff1a1a"
      document.getElementById("der").style.border = "1px solid #ff1a1a"
      document.getElementById("der").style.width = "22%"
      document.getElementById("der").setAttribute('data-id','2')
      break;
    case 9:
      document.getElementById("izq").style.background = "#3333ff"
      document.getElementById("izq").style.border = "1px solid #3333ff"
      document.getElementById("izq").style.width = "86%"
      document.getElementById("izq").setAttribute('data-id','9')
      document.getElementById("der").style.background = "#FFFFFF"
      document.getElementById("der").style.border = "1px solid #FFFFFF"
      document.getElementById("der").style.width = "14%"
      document.getElementById("der").setAttribute('data-id','1')
      break;
    default:

  }
}


function addPuntaje(){

    pts = parseInt(localStorage.getItem('puntaje')+10) ;
    console.log("variable pts"+pts);
    localStorage.setItem('puntaje',pts);
    totalPunt=JSON.parse(localStorage.getItem("puntaje"));
    console.log(totalPunt)
}
