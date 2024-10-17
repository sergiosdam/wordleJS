console.log("Hola!");

const boton = document.getElementById("miBoton");

boton.addEventListener('click', function(){
    alert('Boton clickeado')
});


//obtener el menu
const contextMenu = document.getElementById("contextMenu");
document.getElementById("tablero").addEventListener("contextmenu", function(e) {
    e.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
});


//click para cualquier parte de la pagina
window.addEventListener("click", function(){
    if(!contextMenu.contains(e.target))
    contextMenu.style.display = "none";
});


//alert reiniciar
document.getElementById("reiniciar").addEventListener("click", function(){
    alert("El juego ha sido reinciado");
});

//alert instrucciones
document.getElementById("instrucciones").addEventListener("click", function(){
    alert("Instrucciones del juego")
})

//seleccionar todas las cajas
const cajas = document.querySelectorAll(".caja");

//variable para saber en que caja estamos
let cajaActual = 0;

//funcion para saber si el usuario presiona una tecla
function ingresarLetra (letra){
    if (cajaActual < cajas.length){
        const caja = cajas[cajaActual]; //para seleccionar la caja que corresponde o donde querramos
    caja.textContent = letra.toUpperCase();
    cajaActual++;
    }
}

//cuando el usuario presiona la tecla
window.addEventListener("keydown", function(event){
    if (event.key.match(/^[a-z]$/i)){
        ingresarLetra(event.key);
    }
});




//seleccionamos los botones de la keyboard para el click
const botonesTeclado = document.querySelectorAll("#teclado button");
botonesTeclado.forEach(function(boton){ //cada boton del teclado virtual se agrega un evento
    boton.addEventListener("click", function(){ //el boton con la letra que se ve es lo que queremos ingresar
        ingresarLetra(boton.textContent)
    });
});

//reiniciar juego
function reiniciarJuego(){
    cajaActual = 0;
    cajas.forEach(function(caja){ //limpiar contenido
        caja.textContent = "";
    });
};

//si el usuario reinicia, llamamos desde aca
document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);


