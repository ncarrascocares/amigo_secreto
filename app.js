// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación del arrays para almacenar la lista de amigos
let amigos = [];
let dato;

//PENDIENTE:Queda por validar que no se acepten valores vacios en el array

// funcion
function agregarAmigo(){
    dato = document.getElementById("amigo").value;
    //Validando que los datos no vengan vacios
    //Llenando el array
    validaDatos(dato)
    limpiar();
    console.log(amigos);
}

function sortearAmigo(){
    elementosArrays = amigos.length;
    elementosArrays == 0 ? alert("No se han ingresado amigos") : console.log(amigos[Math.floor(Math.random() * elementosArrays)]);
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