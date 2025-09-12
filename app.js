// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Definicion de variables
//varible para ingresar el nombre que entrega el usuario
let nombre = "";
//Variable para ingresar nombres
let listaDeNombres = [];
//Variable para guardar numero aleatorio
let subIndiceAmigos = 0;
//Definicion de funciones

//Funcion validacion de nombre ingresado
function validarNombre(){
     nombre = document.querySelector("#amigo").value;
    if (nombre.trim() !=""){
        ingresarNombre(nombre);
    }else {alert("Ingrese nombre valido")
    }
}
//Funcion ingresar nombre
function ingresarNombre() {
    listaDeNombres.push(nombre);
}
//Funcion que agrega el amigo
function agregarAmigo(){
    validarNombre()
}
//Funcion muestra lista de nombres ingresados en pantalla
//Funcion sortea Amigo Secreto
//Funcion genera numero aleatorio
