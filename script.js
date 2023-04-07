//4.Faça um programa que recebaa idade de uma pessoa e exibauma mensagem indicando em qual faixa etária ela se encontra
let idade = prompt('Quantos anos você tem?')

if(idade <= 12){
    document.write('Você é uma criança!' )
}else if(idade >= 13 && idade <= 18){
    document.write('Você é um(a) adolescente!')
}else if (idade >= 19 && idade < 60){ 
    document.write('Você é um adulto!')
}else if (idade => 60){
    document.write('Você é um(a) idoso(a)')
}
   

