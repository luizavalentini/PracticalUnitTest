"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Testa função de falar se o ano é bissexto ou não', () => {
    test('Deve retornar ', () => {
        expect((0, index_1.bissexto)(2002)).toBe('false');
    });
});
describe('Testa função de falar se o ano é bissexto ou não', () => {
    test('Deve retornar ', () => {
        expect((0, index_1.bissexto)(2024)).toBe('true');
    });
});
