//3.Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  de  uma  pessoa 
// e  exibe  uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso.

let peso = prompt('Qual é o seu peso em quilogramas?')
let altura = prompt('Qual é a sua altura em centímetros?')
imc = peso/((altura/100) ** 2)

if(imc<18.5){
    document.write('O seu imc é: ' +imc.toFixed(2) +' e você está abaixo do peso ideal!' )
}else if(imc>18.5 && imc<24.9){
    document.write('O seu imc é: ' +imc.toFixed(2) + ' e você está dentro da faixa ideal de peso!')
}else{
    document.write('O seu imc é: ' +imc.toFixed(2) + ' e você está acima do peso ideal!')
}
