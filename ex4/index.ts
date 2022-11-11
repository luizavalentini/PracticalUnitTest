let chegada: number = 1500;
let anoDeHoje: number = 2022;

export function numGeracoes(anoDeHoje: number, chegada: number): number {
 return Math.round(anoDeHoje - chegada) / 28; // Math.floor n ta funcionando e nem o parseFloat
}
