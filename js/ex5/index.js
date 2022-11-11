"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bissexto = void 0;
function bissexto(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
}
exports.bissexto = bissexto;
