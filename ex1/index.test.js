"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Testa função de somar dois números', () => {
    test('deve retornar a soma de ', () => {
        expect((0, index_1.soma)('5', '5')).toBe(10);
    });
});
describe('Testa função de somar dois números, mas um numero negativo', () => {
    test('deve retornar a soma de ', () => {
        expect((0, index_1.soma)('-2', '8')).toBe(6);
    });
});
