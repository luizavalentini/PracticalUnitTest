"use strict";
let chegada = 1500;
let anoDeHoje = 2022;
function numGeracoes(anoDeHoje, chegada) {
    return Math.round(anoDeHoje - chegada) / 28; // Math.floor n ta funcionando e nem o parseFloat
}
alert("Já se passaram " + numGeracoes(anoDeHoje, chegada) + " anos");
