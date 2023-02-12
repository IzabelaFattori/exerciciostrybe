//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
//ir1 - Até R$ 1.903,98: isento de imposto de renda
//ir2 - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//ir3 - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//ir4 - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//ir5 - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


let salario = 1500.10
let novosalario = 0;


if (salario < 1556.95){
    novosalario = (salario - (salario*0.08))
} else if ( salario >= 1556.95 && salario <= 2594.92){
    novosalario = (salario - salario*0.09)
} else if ( salario >= 2594.93 && salario <= 5.189,82){
    novosalario = (salario - salario*0.11)
} else if ( salario >5.189,82){
    novosalario = (salario + 570.88)
}

let ir1 = 0
let ir2 = (novosalario*0.075) - 142.8
let ir3 = (novosalario*0.15) - 354.8
let ir4 = (novosalario*0.225) - 636.13
let ir5 = (novosalario*0.275) - 869.36


if (novosalario < 1903.98){
    console.log(novosalario - ir1)
} else if (novosalario >= 1903.98 && salario <= 2826.65) {
    console.log(novosalario - ir2)
} else if (novosalario >= 2826.66 && salario <= 3751.05) {
    console.log(novosalario - ir3)
} else if (novosalario >= 3751.06 && salario <= 4664.68) {
    console.log(novosalario - ir4)
} else if (novosalario >4664.68) {
    console.log(novosalario - ir5)
}

