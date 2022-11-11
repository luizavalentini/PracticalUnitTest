"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenacaoIdades = exports.subtracaoLuizaEIrmaLuiza = exports.subtracaoCarlosEAna = void 0;
let carlos = 28;
let ana = 15;
let irmaLuiza = 23;
let luiza = 20;
function subtracaoCarlosEAna(carlos, ana) {
    return carlos - ana;
}
exports.subtracaoCarlosEAna = subtracaoCarlosEAna;
function subtracaoLuizaEIrmaLuiza(irmaLuiza, Luiza) {
    return irmaLuiza - Luiza;
}
exports.subtracaoLuizaEIrmaLuiza = subtracaoLuizaEIrmaLuiza;
function concatenacaoIdades(subtracaoCarlosEAna, subtracaoLuizaEIrmaLuiza) {
    return subtracaoCarlosEAna - subtracaoLuizaEIrmaLuiza;
}
exports.concatenacaoIdades = concatenacaoIdades;
