var Regletas;
var ArrayMulti=[];
var pts = 10;

function Login(){
  user = document.getElementById("username").value
  if(user != ''){
    localStorage.setItem('usuario' , JSON.stringify(user))
    nuevoUsuario = JSON.parse(localStorage.getItem("usuario"))
  	console.log(nuevoUsuario)
    notificacionReg(nuevoUsuario,"Bienvenido");
    setTimeout(function(){window.location.href = 'inicio.html'; },2000);

  } else{
    notificacionReg("Ingresa un nombre","Recuerda")
    /*alert("Ingresa un nombre :)")*/

  }
}

function removeStorage(){
  localStorage.removeItem("puntaje");
}

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

function addPuntaje(){
  if (pts==10) {
    localStorage.setItem('puntaje',(0+pts));
    totalPunt=JSON.parse(localStorage.getItem("puntaje"));
  }else{
    pts=pts+10;
    localStorage.setItem('puntaje',(pts));
    totalPunt=JSON.parse(localStorage.getItem("puntaje"));
  }

}

$(document).ready(function(){

  $.getJSON("../js/datosRegletas.json", function(json) {
   //console.log(json);
   Regletas = json;
   //console.log(Regletas);

   $.each(Regletas.multiplicaciones, function( indice ) {
   //console.log( indice );
   ArrayMulti.push(indice);
   });


   console.log(ArrayMulti);

  });

  $(".radioNaipes").click(function () {
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var modo1 = document.getElementById("naipes1");
    var modo2 = document.getElementById("naipes2");
    //console.log(Regletas);

    if (radio1.checked){
        modo1.style.display = "block";
        modo2.style.display = "none";
        var naipeC1 = document.getElementById("naipeCentro1");
        var getRandom = randomMulti(ArrayMulti);
        var random = returnRandom(getRandom);
        //console.log(random);
        naipeC1.innerHTML= random;


    } else
    if (radio2.checked) {
       modo2.style.display = "block";
       modo1.style.display = "none";
       var naipeI2 = document.getElementById("naipeIzq2");
       naipeI2.innerHTML=randomRegletas();
       //localStorage.setItem('izquierda2',naipeI2)
       var izq2 = naipeI2.textContent
       //localStorage.getItem("izquierda2");
       // console.log("Izquierda "+izq2)
       rellenoNaipeIB(izq2);

       var naipeD2 = document.getElementById("naipeDer2");
       naipeD2.innerHTML=randomRegletas();
       //localStorage.setItem('derecha2',naipeD2)
       var der2 = naipeD2.textContent
       //localStorage.getItem("derecha2");
       // console.log("Derecha "+der2)
       rellenoNaipeDB(der2);

    }
  });

  $(".multiplicara").click(function(){
    var resultadoA = parseInt(document.getElementById("naipeCentro1").textContent);

    if (checkEmpty($("#n1")||checkEmpty($("#n2"))) ) {
      notificacionReg("Escribe tu respuesta", "Recuerda");
      console.log("aquí si entró")
    }else{
      var multiplicando1=document.getElementById("n1").value;
      var multiplicando2=document.getElementById("n2").value;
      var totalA = (multiplicando1*multiplicando2);
      console.log(multiplicando1+" x "+multiplicando2+" = "+totalA);
      console.log(totalA);

      if(resultadoA == totalA){
        var naipeI1 = document.getElementById("naipeIzq1");
        naipeI1.innerHTML=multiplicando1;
        var naipeD1 = document.getElementById("naipeDer1");
        naipeD1.innerHTML=multiplicando2;
        rellenoNaipeIA(multiplicando1);
        rellenoNaipeDA(multiplicando2);

        addPuntaje()
        console.log(parseInt(totalPunt));
        notificacionReg("Resultado Correcto, 10pts. para ti","¡Yaaay! :)");
        setTimeout(function(){location.reload(); },3000);
      }else{
        notificacionReg("Resultado Incorrecto, intenta otra vez.","¡Oh no! :(");
      }

    }

  });

  $(".multiplicarb").click(function () {
    var valor1=document.getElementById("naipeIzq2").textContent;
    var valor2=document.getElementById("naipeDer2").textContent;
    var multiplicandoA=parseInt(valor1,10);
    var multiplicandoB=parseInt(valor2,10);
    if (checkEmpty($("#res")) ) {
      notificacionReg("Escribe tu respuesta", "Recuerda");
      console.log("aquí si entró")
    }else{
      var total = parseInt(document.getElementById("res").value);
      console.log(total);
      var resultado = (multiplicandoA*multiplicandoB);
      console.log(multiplicandoA+" x "+multiplicandoB+" = "+resultado);
      console.log(resultado);
      if(parseInt(resultado) == parseInt(total)){

        //localStorage.setItem('puntaje',(puntos+10));
        //totalPunt=JSON.parse(localStorage.getItem("puntaje"));
        addPuntaje()
        console.log(parseInt(totalPunt));
        notificacionReg("Resultado Correcto, 10pts. para ti","¡Yaaay! :)");
        setTimeout(function(){location.reload(); },3000);
      }else{
        notificacionReg("Resultado Incorrecto, intenta otra vez.","¡Oh no! :(");
        //setTimeout(function(){location.reload(); },3000);
      }
    }


});
  //console.log(arrayRegletas);

});
