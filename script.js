const miTitulo = document.querySelector("#titulo-principal");
const miUsuario = document.querySelector("#nombre-usuario");
const miImagen = document.querySelector("#imagen");
const miEnlace = document.querySelector("#enlace");
const cuerpoDePagina = document.querySelector("body");

const IMAGEN_UNO = "https://th.bing.com/th?id=OIP.BWHJsDkfkdH0cnqkQqzVWQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
const IMAGEN_DOS = "https://th.bing.com/th/id/OIP.Nnrs5nrwB9RhHp9_Dss8bQHaEK?w=284&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const IMAGEN_TRES = "https://th.bing.com/th/id/OIP.OWSpGf2FL9Jpee7t_AO41wHaFb?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/"
const ENLACE_2 = "https://discord.com/"
const ENLACE_3 = "https://stackoverflow.com/"

const CAMBIO_IMG_1 = "200px";
const CAMBIO_IMG_2 = "300px";
const CAMBIO_IMG_3 = "450px";

const CAMBIO_LETRA_1 = "15px";
const CAMBIO_LETRA_2 = "20px";
const CAMBIO_LETRA_3 = "30px";

const TIPO_FUENTE_1 = "monospace";
const TIPO_FUENTE_2 = "cursive";
const TIPO_FUENTE_3 = "fantasy";



let opcionRecibida = prompt("Ingrese a la pagina : \na\nb\nc");
let nombreUsuarioIngresado = prompt("Ingrese un nombre de usuario");

function modificacionPagina(colorFondo, colorTexto, enlaceImg, enlacePagina, tamImg, txtTam, cambiofuente, colorUsuario) {
    miUsuario.innerHTML = nombreUsuarioIngresado;
    cuerpoDePagina.style.backgroundColor = colorFondo;
    cuerpoDePagina.style.color = colorTexto;
    miImagen.src = enlaceImg;
    miEnlace.href = enlacePagina;
    miImagen.style.width = tamImg;
    cuerpoDePagina.style.fontSize = txtTam;
    cuerpoDePagina.style.fontFamily = cambiofuente;
    miUsuario.style.color = colorUsuario;

}

if (opcionRecibida == "a"){
    modificacionPagina("orange", "black", IMAGEN_UNO, ENLACE_1,CAMBIO_IMG_1, CAMBIO_LETRA_1, TIPO_FUENTE_1, "red");
}else if(opcionRecibida == "b"){
    modificacionPagina("black", "white", IMAGEN_DOS, ENLACE_2, CAMBIO_IMG_2, CAMBIO_LETRA_2, TIPO_FUENTE_2, "violet");
}else if(opcionRecibida == "c"){
    modificacionPagina("pink", "green", IMAGEN_TRES, ENLACE_3, CAMBIO_IMG_3, CAMBIO_LETRA_3, TIPO_FUENTE_3, "white");
}