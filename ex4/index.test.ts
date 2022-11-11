import { numGeracoes } from './index';

describe('Testa função que retorna os anos que passaram desde 1500', () => {
    test('Deve retornar ', () => {

      expect(numGeracoes(2022, 1500)).toBe(18.642857142857142)
    })
  })

  describe('Testa função que retorna os anos que passaram desde 1500', () => {
    test('Deve falhar ', () => {

      expect(numGeracoes(2022, 1500)).not.toBe(-30)
    })
  })