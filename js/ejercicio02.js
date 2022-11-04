//Si pulsamos el id enlace_1 se activa la funcion muestraOculta
document.getElementById('enlace_1').addEventListener('click',muestraOculta, false);
document.getElementById('enlace_1').idInVisibilidad="contenidos_1";
document.getElementById('enlace_1').cambiarMensaje="enlace_1";

document.getElementById('enlace_2').addEventListener('click',muestraOculta, false);
document.getElementById('enlace_2').idInVisibilidad="contenidos_2";
document.getElementById('enlace_2').cambiarMensaje="enlace_2";

document.getElementById('enlace_3').addEventListener('click',muestraOculta, false);
document.getElementById('enlace_3').idInVisibilidad="contenidos_3";
document.getElementById('enlace_3').cambiarMensaje="enlace_3";


function muestraOculta(event){
    //Al entrar en la funcion se activa la opcion de esconder
    event.currentTarget.idInVisibilidad.classList.toggle("invisibilidad");
    //Al entrar en la función se activa la opción de cambiar el mensaje
    let a = event.currentTarget.cambiarMensaje;
    
    if(a.innerHTML === "Ocultar contenidos"){
        a.innerHTML = "Mostrar Contenidos"
    }else{
        a.innerHTML = "Ocultar contenidos"
    }
   
    //document.getElementById(event.currentTarget.cambiarMensaje).a;

}
/*Al final le dejo el código con el que me salia el ejercicio para poder entregarlo
y su explicacion la trabajo con más tiempo porque no me salia y tampoco encontraba los errores
Necesito más tiempo para asimilar los conocimientos.
Muchas gracias*/