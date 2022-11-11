"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = void 0;
let numero1 = prompt('Digite um número') || '';
let numero2 = prompt('Digite um número') || '';
const soma = (numero1, numero2) => {
    return (`${numero1} + ${numero2} = ${parseInt(numero1) + parseInt(numero2)}`);
};
exports.soma = soma;
alert('A soma é igual ' + (0, exports.soma)(numero1, numero2));
