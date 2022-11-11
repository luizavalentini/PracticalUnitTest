"use strict";
let numero1: string | null = prompt('Digite um número') || ''
let numero2: string | null = prompt('Digite um número') || ''

export const soma = (numero1: string, numero2: string) => {
    return(`${numero1} + ${numero2} = ${parseInt(numero1) + parseInt(numero2)}`);
};

alert('A soma é igual ' + soma(numero1,numero2));
