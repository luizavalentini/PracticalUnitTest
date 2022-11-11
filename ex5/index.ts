export function bissexto(ano: number): boolean {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
 }
