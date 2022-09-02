"use strict";


let pan = [8,200];
let leche = [5,210];
let jugo = [3,150];
let huevo = [2,65];
let aceite = [5,310];
let arroz = [12,93];

let tarjetaPan = document.getElementById("pan");
let resumenPan = document.createElement("p");
resumenPan.innerHTML = "Pan Stock "+pan[0]+" Precio : $"+pan[1];

tarjetaPan.appendChild(resumenPan);

let tarjetaLeche = document.getElementById("leche");
let resumenLeche = document.createElement("p")
resumenLeche.innerHTML = "Leche Stock "+leche[0]+" Precio : $"+leche[1];;

tarjetaLeche.appendChild(resumenLeche);

let tarjetaJugo = document.getElementById("jugo");
let resumenJugo = document.createElement("p")
resumenJugo.innerHTML = "Jugo Stock "+ jugo[0]+" Precio : $"+jugo[1];;

tarjetaJugo.appendChild(resumenJugo);

let tarjetaHuevo = document.getElementById("huevo");
let resumenHuevo = document.createElement("p")
resumenHuevo.innerHTML = "Jugo Stock "+ huevo[0]+" Precio : $"+huevo[1];;

tarjetaHuevo.appendChild(resumenHuevo);

let tarjetaAceite = document.getElementById("aceite");
let resumenAceite = document.createElement("p")
resumenAceite.innerHTML = "Aceite Stock "+ aceite[0]+" Precio : $"+aceite[1];;

tarjetaAceite.appendChild(resumenAceite);

let tarjetaArroz = document.getElementById("arroz");
let resumenArroz = document.createElement("p")
resumenArroz.innerHTML = "Arroz Stock "+ arroz[0]+" Precio : $"+arroz[1];;

tarjetaArroz.appendChild(resumenArroz);