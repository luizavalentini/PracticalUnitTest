import { soma } from './index';

describe('Testa função de somar dois números', () => {
    test('deve retornar a soma de ', () => {

      expect(soma('5', '5')).toBe(10)
    })
  })

  describe('Testa função de somar dois números, mas um numero negativo', () => {
    test('deve retornar a soma de ', () => {

      expect(soma('-2', '8')).toBe(6)
    })
  })


