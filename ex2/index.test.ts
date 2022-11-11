import { alertaAtendente } from './index';

describe('Testa função alertaAtendente que recebe duas string', () => {
    test('E deve retornar', () => {

      expect(alertaAtendente ('teste','teste2')).toBe(`Olá, teste! Eu me chamo teste2, como posso ajudar?`);
    })
  })


  // se receber um numeber?

  