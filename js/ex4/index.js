"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numGeracoes = void 0;
let chegada = 1500;
let anoDeHoje = 2022;
function numGeracoes(anoDeHoje, chegada) {
    return Math.round(anoDeHoje - chegada) / 28; // Math.floor n ta funcionando e nem o parseFloat
}
exports.numGeracoes = numGeracoes;
