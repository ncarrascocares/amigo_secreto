// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación del arrays para almacenar la lista de amigos
let amigos = [];
let dato;

//PENDIENTE:Queda por validar que no se acepten valores vacios en el array

// funcion
function agregarAmigo(){
    dato = document.getElementById("amigo").value;
    //Llenando el array
    amigos.push(dato);
    limpiar();
    console.log(amigos);
}

//Esta función quedo operativa
function limpiar(){
    document.getElementById("amigo").value = "";
}