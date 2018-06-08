  // //INICIO REGLETAPP
  // $('a #navLink').click(function () {
  //   setTimeout(function(){window.location.href = "inicio.html" },2000);
  // });
  //
  // //¿CÓMO FUNCIONA?
  // $('a #pestInfo').click(function () {
  //   setTimeout(function(){window.location.href = "info.html" },2000);
  //
  // });

$(document).ready(function(){

  var numero=randomSumas();
      //console.log(parseInt(numero));
      rellenoSuma(numero);

      //INICIO Sumas

      $(".ejercicio").click(function () {
        var numero=randomSumas();
        //console.log(parseInt(numero));
        rellenoSuma(numero);

      });

      $(".sumar").click(function () {
        var resultadoS = parseInt(document.getElementById("respuesta").textContent);
        if (checkEmpty($("#n1")||checkEmpty($("#n2")))) {
          notificacionReg("Escribe tu respuesta", "Recuerda");
          console.log("aquí si entró")
        }else{
          var sumando1=parseInt(document.getElementById("n1").value);
          console.log("sumando1: "+sumando1);

          var s1 = parseInt(document.getElementById("izq").getAttribute('data-id'));
          console.log("s1: "+s1);
          var sumando2=parseInt(document.getElementById("n2").value);
          console.log("sumando2: "+sumando2);
          var s2 = parseInt(document.getElementById("der").getAttribute('data-id'));
          console.log("s2: "+s2);
          if (sumando1 == s1 && sumando2 == s2) {
            var totalS = (sumando1+sumando2);
            console.log(sumando1+" + "+sumando2+" = "+resultadoS);
            console.log(totalS);

            if(resultadoS == totalS){
              addPuntaje();
              notificacionReg("Resultado Correcto, 10pts. para ti","¡Yaaay! :)");
              setTimeout(function(){location.reload(); },3000);
            }else{
              notificacionReg("Resultado Incorrecto, intenta otra vez.","¡Oh no! :(");
            }
          }else{
            notificacionReg("Valores de regletas incorrectos, intenta otra vez.","¡Oh no! :(");
          }

        }


      });

      //FIN SUMAS

});



  //console.log(arrayRegletas);
