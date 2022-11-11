"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Testa função de subtrair a idade de Carlos com a de Ana', () => {
    test('Deve retornar a subtração de ', () => {
        expect((0, index_1.subtracaoCarlosEAna)(28, 15)).toBe(13);
    });
});
describe('Testa função de subtrair a idade de Carlos com a de Ana', () => {
    test('Deve falhar o retorno da subtração de ', () => {
        expect((0, index_1.subtracaoCarlosEAna)(28, 15)).toBe(10);
    });
});
describe('Testa a funcão de subtrair a idade da Irma Luiza com a de Luiza', () => {
    test('Deve falhar o retornar da subtração de ', () => {
        expect((0, index_1.subtracaoLuizaEIrmaLuiza)(23, 20)).toBe(3);
    });
});
describe('Testa a funcão de subtrair a idade da Irma Luiza com a de Luiza', () => {
    test('Deve falhar o retorno da subtração de ', () => {
        expect((0, index_1.subtracaoLuizaEIrmaLuiza)(23, 20)).toBe(5);
    });
});
describe('Testa a funcão de subtrair o resultado da função subtracaoCarlosEAna com a subtração da função subtracaoLuizaEIrmaLuiza ', () => {
    test('Deve retornar a subtração de', () => {
        expect((0, index_1.concatenacaoIdades)(13, 3)).toBe(10);
    });
});
describe('Testa a funcão de subtrair o resultado da função subtracaoCarlosEAna com a subtração da função subtracaoLuizaEIrmaLuiza ', () => {
    test('Deve falhar o retorno da subtração de ', () => {
        expect((0, index_1.concatenacaoIdades)(13, 3)).toBe(20);
    });
});
