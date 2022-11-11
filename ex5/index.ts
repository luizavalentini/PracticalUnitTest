let ano: string | null = prompt("Digte um ano ") || '';

function bissexto(ano: string): boolean {
    return (parseInt(ano) % 4 == 0 && parseInt(ano) % 100 != 0) || parseInt(ano) % 400 == 0;
 }

 alert('O ano digitado é bissexto: '+ bissexto(ano));