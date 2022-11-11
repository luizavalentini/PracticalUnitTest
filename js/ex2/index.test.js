"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Testa função alertaAtendente que recebe duas string', () => {
    test('E deve retornar', () => {
        expect((0, index_1.alertaAtendente)('teste', 'teste2')).toBe(`Olá, teste! Eu me chamo teste2, como posso ajudar?`);
    });
});
// se receber um numeber?
