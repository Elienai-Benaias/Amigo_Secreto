// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Definicion de variables
//Variable para ingresar nombres
let listaDeNombres = [];
//variable para seleccionar Elemento del HTML
let listaEscribirNombresGuardado = "";
//variable para guardar los elementos a escribir
let listaDeNombresGuardado = ""
//Variable para guardar numero aleatorio
let subIndiceAmigos = 0;
//variable para guardar amigo secreto
let amigoSecreto = "";
//Definicion de funciones

//Funcion validacion de nombre ingresado
function validarNombre(){
     let nombre = document.querySelector("#amigo").value;
    if (nombre.trim() !=""){
        ingresarNombre(nombre);
        document.querySelector("#amigo").value = "";
    }else {alert("Ingrese nombre valido")
    }
}
//Funcion ingresar nombre
function ingresarNombre(nombre) {
    listaDeNombres.push(nombre);
    mostrarNombre();
}
//Funcion que agrega el amigo
function agregarAmigo(){
    validarNombre();
}
//Funcion muestra lista de nombres ingresados en pantalla
function mostrarNombre(){
     listaEscribirNombresGuardado = document.querySelector('#listaAmigos');
    for (let i = 0; i < listaDeNombres.length; i++)
    { listaDeNombresGuardado +=`<li>${listaDeNombres[i]}<li>`;
    }
 listaEscribirNombresGuardado.innerHTML = listaDeNombresGuardado;   
 listaDeNombresGuardado = "";    
}

//Funcion sortea Amigo Secreto
function sortearAmigo(){
     amigoSecreto = listaDeNombres[numeroAleatorio()];
     listaDeNombresGuardado = "";
     listaDeNombresGuardado = amigoSecreto;
     listaEscribirNombresGuardado.innerHTML = listaDeNombresGuardado;
     listaDeNombresGuardado="";
}
//Funcion genera numero aleatorio
function numeroAleatorio(){
    subIndiceAmigos = Math.floor(Math.random()*listaDeNombres.length);
    return subIndiceAmigos;
}