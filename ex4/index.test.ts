import { numGeracoes } from './index';

describe('Testa função que retorna os anos que passaram desde 1500', () => {
    test('Deve retornar ', () => {

      expect(numGeracoes(2022, 1500)).toBe(18,6428571)
    })
  })

  describe('Testa função que retorna os anos que passaram desde 1500', () => {
    test('Deve falhar ', () => {

      expect(numGeracoes(2022, 1500)).toBe(-30)
    })
  })