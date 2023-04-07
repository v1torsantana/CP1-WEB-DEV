//5. Crie um programa que recebaum nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado.


let user1 = prompt('Qual é o usuário?')
let senha1 = prompt('Qual é a senha?')

if(user1 == 'admin' && senha1 == 1234){
    window.alert('Login efetuado com sucesso! Seja bem-vindo.')
}else{
    window.alert('Dados incorretos, revise o usuário e/ou a senha.')
}

