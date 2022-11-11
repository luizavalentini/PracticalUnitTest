import { bissexto } from './index';

describe('Testa função de falar se o ano é bissexto ou não', () => {
    test('Deve retornar ', () => {

      expect(bissexto(2002)).toBe(false)
    })
  })
  describe('Testa função de falar se o ano é bissexto ou não', () => {
    test('Deve retornar ', () => {

      expect(bissexto(2024)).toBe(true)
    })
  })
