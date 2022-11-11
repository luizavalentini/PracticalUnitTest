"use strict";
let nomeCliente = prompt("Digite seu nome: ") || '';
let nomeAtendente = prompt('Digite o nome da atendente: ') || '';
function alertaAtendente(nomeCliente, nomeAtendente) {
    alert(`Olá, ${nomeCliente}! Eu me chamo ${nomeAtendente}, como posso ajudar?`);
}
alert(alertaAtendente(nomeCliente, nomeAtendente));
