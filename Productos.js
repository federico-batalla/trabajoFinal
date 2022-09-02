"use strict";


let pan = [18, 200];
let leche = [15, 210];
let jugo = [13, 150];
let huevo = [12, 65];
let aceite = [15, 310];
let arroz = [122, 93];


let inputPan = document.getElementById("inputPan");
let inputLeche = document.getElementById("inputLeche");
let inputJugo = document.getElementById("inputJugo");
let inputHuevo = document.getElementById("inputHuevo");
let inputAceite = document.getElementById("inputAceite");
let inputArroz = document.getElementById("inputArroz");


let btnComprar = document.getElementById("btnComprar");
btnComprar.addEventListener("click", comprar);

let tarjetaPan = document.getElementById("pan");
let resumenPan = document.createElement("p");
resumenPan.innerHTML = "Pan Stock " + pan[0] + " Precio : $" + pan[1];

tarjetaPan.appendChild(resumenPan);

let tarjetaLeche = document.getElementById("leche");
let resumenLeche = document.createElement("p")
resumenLeche.innerHTML = "Leche Stock " + leche[0] + " Precio : $" + leche[1];;

tarjetaLeche.appendChild(resumenLeche);

let tarjetaJugo = document.getElementById("jugo");
let resumenJugo = document.createElement("p")
resumenJugo.innerHTML = "Jugo Stock " + jugo[0] + " Precio : $" + jugo[1];;

tarjetaJugo.appendChild(resumenJugo);

let tarjetaHuevo = document.getElementById("huevo");
let resumenHuevo = document.createElement("p")
resumenHuevo.innerHTML = "Huevo Stock " + huevo[0] + " Precio : $" + huevo[1];;

tarjetaHuevo.appendChild(resumenHuevo);

let tarjetaAceite = document.getElementById("aceite");
let resumenAceite = document.createElement("p")
resumenAceite.innerHTML = "Aceite Stock " + aceite[0] + " Precio : $" + aceite[1];;

tarjetaAceite.appendChild(resumenAceite);

let tarjetaArroz = document.getElementById("arroz");
let resumenArroz = document.createElement("p")
resumenArroz.innerHTML = "Arroz Stock " + arroz[0] + " Precio : $" + arroz[1];;

tarjetaArroz.appendChild(resumenArroz);

function validarVacio(inputPan, inputLeche, inputJugo, inputHuevo, inputAceite, inputArroz) {

    let vacio = true
    if (inputPan.value > 0) {
        vacio = false
        console.log("pan vacio")
        
    }
    if (inputLeche.value > 0) {
        vacio = false
        console.log("leche vacio")
    }
    if (inputJugo.value > 0) {
        vacio = false
        console.log("jugo vacio")
    }
    if (inputHuevo.value > 0) {
        vacio = false
        console.log("huevo vacio")

    }
    if (inputAceite.value > 0) {
        vacio = false
        console.log("aceite vacio")
    }
    if (inputArroz.value > 0) {
        vacio = false
        console.log("arroz vacio")
    }
    console.log(vacio)
    return vacio;
}

function validar(inputPan, inputLeche, inputJugo, inputHuevo, inputAceite, inputArroz) {

    let compra = [true, "Su Compra  exede el Stock disponible en  "]
    if (inputPan.value > pan[0]) {
        compra[1] = compra[1] + " pan ";
        compra[0] = false;
    }
    if (inputLeche.value > leche[0]) {
        compra[1] = compra[1] + " leche ";
        compra[0] = false;
    }
    if (inputJugo.value > jugo[0]) {
        compra[1] = compra[1] + " jugo ";
        compra[0] = false;
    }
    if (inputHuevo.value > huevo[0]) {
        compra[1] = compra[1] + " huevo ";
        compra[0] = false;

    }
    if (inputAceite.value > aceite[0]) {
        compra[1] = compra[1] + " aceite ";
        compra[0] = false;
    }
    if (inputArroz.value > arroz[0]) {
        compra[1] = compra[1] + " arroz ";
        compra[0] = false;
    }
    return compra;
}


function resumenCompra(inputPan, inputLeche, inputJugo, inputHuevo, inputAceite, inputArroz) {


    document.getElementById("conTarjetas").classList.add("oculto");
    let descripcion = document.getElementById("descripcion");
    let div = document.createElement("div");
    div.classList.add("contenedorCompra");
    let titulo = document.createElement("h2");
    let parrafoPan = document.createElement("p");
    let parrafoLeche = document.createElement("p");
    let parrafoJugo = document.createElement("p");
    let parrafoHuevos = document.createElement("p");
    let parrafoAceite = document.createElement("p");
    let parrafoArroz = document.createElement("p");
    let parrafoTotal = document.createElement("p");

    let Total = (pan[1] * inputPan.value) + (leche[1] * inputLeche.value) + (jugo[1] * inputJugo.value) + (huevo[1] * inputHuevo.value) + (aceite[1] * inputAceite.value) + (arroz[1] * inputArroz.value);

    titulo.innerHTML = "Resumen de Compra"
    parrafoPan.innerHTML = "Pan " + inputPan.value + "  $" + pan[1] * inputPan.value;
    parrafoLeche.innerHTML = "Leche " + inputLeche.value + "  $" + leche[1] * inputLeche.value;
    parrafoJugo.innerHTML = "Jugo " + inputJugo.value + "  $" + jugo[1] * inputJugo.value;
    parrafoHuevos.innerHTML = "Huevo " + inputHuevo.value + "  $" + huevo[1] * inputHuevo.value;
    parrafoAceite.innerHTML = "Aceite " + inputAceite.value + "  $" + aceite[1] * inputAceite.value;
    parrafoArroz.innerHTML = "Arroz " + inputArroz.value + "  $" + arroz[1] * inputArroz.value;
    parrafoTotal.innerHTML = "Total de Compra     $" + Total;


    div.appendChild(titulo);
    div.appendChild(parrafoPan);
    div.appendChild(parrafoLeche);
    div.appendChild(parrafoJugo);
    div.appendChild(parrafoHuevos);
    div.appendChild(parrafoAceite);
    div.appendChild(parrafoArroz);
    div.appendChild(parrafoTotal);

    descripcion.appendChild(div);

}

function comprar() {
        if (validarVacio(inputPan, inputLeche, inputJugo, inputHuevo, inputAceite, inputArroz)){
            alert("no compro ningun producto");
        }else{
        let compra = [];
        compra = validar(inputPan, inputLeche, inputJugo, inputHuevo, inputAceite, inputArroz);
        if (compra[0]) {
            resumenCompra(inputPan, inputLeche, inputJugo, inputHuevo, inputAceite, inputArroz)
        }
        else {
            alert(compra[1]);
        }
        }
       
    

}