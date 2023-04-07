//6.Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado.

let n1 = parseFloat(prompt('Qual é a primeira nota?'))
let n2 = parseFloat(prompt('Qual é a segunda nota?'))
let n3 = parseFloat(prompt('Qual é a terceira nota?'))
let n4 = parseFloat(prompt('Qual é a quarta nota?'))
media = (n1 + n2 + n3 + n4) / 4

if (media >= 6){
    document.write('Parabéns, você foi aprovado com a media ' +media+ ' !')

}else{
    document.write('Infelizmente sua nota ' +media+ ' não foi suficiente, você foi reprovado!')
}