var Regletas;
var ArrayMulti=[];
var pts = 10;

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
    //INICIO MULTIPLICACIONES
    // $('a #pestNaipes').on('click','.radioNaipes',function(){
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

    // });

    // $(".radioNaipes").click(function () {
    // });

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
    //FIN MULTIPLICACIONES

  //console.log(arrayRegletas);

});
