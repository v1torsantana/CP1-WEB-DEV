/*//1.Como declarar uma variável com valor undefined em JavaScript?
//let nome;
//console.log(nome)








//2.Como usar o operador % em JavaScript?

document.write(20 % 6)
//Calcula o resto da divisão, ou seja, 20 dividido por dois daria 18 (6*3) + 2, sendo 2 o resto








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







   
//5. Crie um programa que recebaum nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado.

let user1 = prompt('Qual é o usuário?')
let senha1 = prompt('Qual é a senha?')

if(user1 == 'admin' && senha1 == 1234){
    window.alert('Login efetuado com sucesso! Seja bem-vindo.')
}else{
    window.alert('Dados incorretos, revise o usuário e/ou a senha.')
}








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









let nome = prompt('Qual é o seu nome?')
let idade = prompt('Quantos anos você tem?')
let curso = prompt('Qual curso vc faz?')
let ano = prompt('Em qual ano do curso vc está?') 

document.write('Seu nome é ' +nome)
document.write('<br></br>')
document.write('Você tem ' +idade + ' anos')
document.write('<br></br>')
document.write('Está cursando ' +curso)
document.write('<br></br>')
document.write('No ' +ano + ' ° ano do curso')
document.write('<br></br>')








8.Crie  um  programa  em  Javascript  que troque  a  palavra  lugar  por  mundo  da frase O  LUGAR  VIRA TECNOLOGIA e apresente na tela. 
 let frase = "O lugar vira tecnologia";
 let frasenova = frase.replace("lugar", "mundo");
 console.log(frasenova)









//9.Crie um programa que declare a variável como String depois converta para float e em seguida apresente apenas dois numeros depois da virgula]
let numString = '12345.222222'
console.log(numString)
console.log(parseFloat(numString).toFixed(2))*/
