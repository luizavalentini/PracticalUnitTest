"use strict";
let nomeCliente: string | null = prompt("Digite seu nome: ") || '';
let nomeAtendente: string | null = prompt('Digite o nome da atendente: ') || '';

function alertaAtendente(nomeCliente: string, nomeAtendente: string){
    alert(`Olá, ${nomeCliente}! Eu me chamo ${nomeAtendente}, como posso ajudar?`)
}
alert(alertaAtendente(nomeCliente, nomeAtendente));
