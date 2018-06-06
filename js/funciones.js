function notificacion_(texto, titulo){
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
    console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
  	console.log(nuevoUsuario)
    //notificacion_(nuevoUsuario,"Bienvenido")
    window.location.href = 'inicio.html';
  } else{
    notificacion_("Ingresa un nombre","Recuerda")
    /*alert("Ingresa un nombre :)")*/

  }
}

function cambiarModo() {
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var modo1 = document.getElementById("naipes1");
    var modo2 = document.getElementById("naipes2");

    if (radio1.checked){
        modo1.style.display = "block";
        modo2.style.display = "none";
    }
    if (radio2.checked) {
       modo2.style.display = "block";
       modo1.style.display = "none";
    }
}
