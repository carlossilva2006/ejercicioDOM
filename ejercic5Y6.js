/*
EJERCICIO 5
El factorial de un número entero n es una operación matemática que consiste 
en multiplicar todos los factores n x (n - 1) x (n - 2) x...x1. Así, el factorial 
de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120 

Utilizando la estructura for, crear un script que calcule el factorial de un número entero

EJERCICIO 6
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.

Ejercicio 7
Arrays. Leer una cadena de texto en un formulario y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la 'a' 
la 'z' y las palabras ordenadas de la 'z'  a la 'a'.

Sacar toda esta información en una ventana nueva.
'Interfaz titulo Información sobre el texto introducido'
Numero de palabra:' '
Primera palabra:' '
ultima palabra:' '
colocadas al reves:
'ejercicio..este..realizar..favor..carlos..hola'
ordenadas de la 'a' a la 'z':
'carlos..hola..ejercicio..favor..realizar..este'
ordenadas de la 'z' a la 'a':
'este..realizar..favor..ejercicio..hola..carlos'
           ...HECHO
*/ 
'use strict'

let numero,
    calcular,
    num,
    resul;
      
numero = document.getElementById("numFactor") 
calcular = document.getElementById("calcular") 
resul = document.getElementById("resultado")

calcular.addEventListener("click",() => {
   if(numero.value == ""){
    alert("debe ingresar numero");
   }else{
    num = numero.value;
    let acu = 1;
    for(let i = num; i > 0; i--){
        acu = acu * i;
    }
    resul.innerHTML = acu;
   }
   limpiar();
})

function limpiar() {  
    numero.value = "";
    numero.focus();
}

// ejercicio 6
let nu,
    consul,
    numCo,
    par = 'Par',
    impar = 'Impar'

nu = document.getElementById("parImp")
consul = document.getElementById("consultar")
numCo = document.getElementById("numCon")

consul.addEventListener("click", () => {
    if(nu.value % 2 == 0){
        numCo.innerHTML = par;
    }else{
        numCo.innerHTML = impar;
    }
    clear();
})

function clear(){
    nu.value = "";
    nu.focus();
}

// Ejercicio 7
let mensaje,
    pulsar,
    leng,
    primer,
    ultimo,
    reves,
    revers,
    ordenAZ,
    ordenZA

mensaje = document.getElementById("mensaje")
pulsar  = document.getElementById("pulsar")
leng    = document.getElementById("meLen")
primer  = document.getElementById("mePri")
ultimo  = document.getElementById("meUlt")
reves   = document.getElementById("reves")
ordenAZ = document.getElementById("ordenAZ") 
ordenZA = document.getElementById("ordenZA")

pulsar.addEventListener("click", () => {
    arreCadena();
})

function arreCadena() {
    if(mensaje.value == ""){
        alert("debe ingresar texto");
    }else if(mensaje.value !== ""){
        let separar = mensaje.value.split(" ");
        mensaje = separar.length;
        leng.innerHTML    = mensaje;
        primer.innerHTML  = separar[0];
        ultimo.innerHTML  = separar[separar.length - 1];
        revers = separar.reverse();
        reves.innerHTML   = revers;
        ordenAZ.innerHTML = separar.sort();
        ordenZA.innerHTML = separar.sort().reverse();
    }
    nuevo();
}

function nuevo(){
    document.getElementById("mensaje").value ="";
    document.getElementById("mensaje").focus();
}
