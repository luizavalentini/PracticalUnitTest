"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Testa função alertaAtendente que recebe duas string', () => {
    test('E deve retornar', () => {
        expect((0, index_1.alertaAtendente)('', '')).toBe('' + '');
    });
});
// se receber um numeber?
