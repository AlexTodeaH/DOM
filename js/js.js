// Cuando se carga el index se comprueba si existe una cookie de un usuario conectado y lo escribe, si no 
// da la opcion de conectarse o registrarse.

if(getCookie('conectado')){
	$(".usuario").html("<a>"+getCookie('conectado')+"</a><a id=\"logOut\">Log Out</a>");
} else {
	$(".usuario").html("<a href=\"logIn.html\">Log In / Sign Up</a>");
}

// Cuando se desconecta borramos la cookie 'conectado'

$("#logOut").click(function(){
    dropCookie('conectado');
    location.reload();
});

// Funcion para crear las cookies dado nombre y valor

function setCookie(nombre,valor){
	document.cookie = nombre + "=" + valor + ";path=/";
}

// Funcion para obtener el valor de la cookie dado un nombre

function getCookie(nombre){
	var biscuit = nombre + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(biscuit) == 0) return c.substring(biscuit.length,c.length);
    }
    return null;
}

// Funcion para borrar una cookie dado un nombre

function dropCookie(name) {
    setCookie(name,"",-1);
}


//     DISEÑO DE INTERFACES WEB



var slideIndex = 1;

showDivs(slideIndex);

// Función para las flechas

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Vamos probando en que imagen se encuentra para que cuando llegue al final
// vuelva a mostrar las imágenes del principio y si no las oculta.

function showDivs(n) {
  var i;
  var x = $(".mySlides");
  if (n > x.length-2) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length-2}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "inline";  
  x[slideIndex].style.display = "inline";  
  x[slideIndex+1].style.display = "inline";  
}

// Efecto aparición de las imágenes

window.onscroll = scroll;

// Creamos la función con la que controlaremos según a qué distancia nos encontremos haciendo
// scroll aparecerá una imagen o otra

function scroll(){

// Le añadimos dos condiciones que borre la clase de la animación para que cuando vuelva a bajar
// vuelva a aparecer la animación

	if($(document).scrollTop() < 150){
		$(".aparecerD").removeClass("come-in-right");
    } 
    if($(document).scrollTop() < 100){
		$(".aparecerI").removeClass("come-in-left");
    } 

// La segunda imagen que está más abajo le añadimos la animación de aparición desde la derecha y
// para la primera imagen la animación de aparición desde la izquierda

    if($(document).scrollTop() > 550){ 
		$(".aparecerD").addClass("come-in-right"); 
    }
    if($(document).scrollTop() > 250){ 
		$(".aparecerI").addClass("come-in-left"); 
    }
}

// Si ha cerrado la pestaña de información de las cookies evitaremos que vuelva a aparecer

$(".cerrar").click(function(){
	setCookie('cookies','aceptadas');
	$(".cookies").css('display','none');
});

if(getCookie('cookies')=='aceptadas'){
	$(".cookies").css('display','none');
}
