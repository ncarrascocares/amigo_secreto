// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación del arrays para almacenar la lista de amigos
var amigos = [];
var dato;
var mensaje = document.getElementById("resultado");

// funcion
function agregarAmigo(){
    dato = document.getElementById("amigo").value;
    validaDatos(dato)
    limpiar();
    //console.log(amigos);
}

function sortearAmigo(){
    elementosArrays = amigos.length;
    var aleatorio = Math.floor(Math.random() * elementosArrays)
    console.log(mensaje)
    elementosArrays == 0 ? alert("No se han ingresado amigos") : mensaje.innerText = amigos[aleatorio];
}

//Esta función quedo operativa
function limpiar(){
    document.getElementById("amigo").value = "";
}

function validaDatos(valor){
    if(valor === ""){
        alert("Por favor, inserte un nombre."); 
    }else{
        amigos.push(dato); 
    }
}