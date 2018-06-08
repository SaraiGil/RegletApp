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
