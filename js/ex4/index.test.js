"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Testa função que retorna os anos que passaram desde 1500', () => {
    test('Deve retornar ', () => {
        expect((0, index_1.numGeracoes)(2022, 1500)).toBe(18.642857142857142);
    });
});
describe('Testa função que retorna os anos que passaram desde 1500', () => {
    test('Deve falhar ', () => {
        expect((0, index_1.numGeracoes)(2022, 1500)).not.toBe(-30);
    });
});
