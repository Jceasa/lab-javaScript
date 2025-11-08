
// Constante
const cpf = 2000050000;

// Float
let flutuante = 3.0

// int
let inteiro = 2

// String
let letras = "Júlio"



function soma() {
    let n1 = parseInt(prompt("Digite um número: "));
    let n2 = parseInt(prompt("Digite outro número: "));
    resultado = n1 + n2
    return alert(resultado)
}

function calculo() {
    let input = prompt("Digite o operador para o cálculo: ")
    
    if (input == "Adição") {
        let n1 = parseInt(prompt("Digite um número: "));
        let n2 = parseInt(prompt("Digite outro número: "));
        return alert(n1 + n2)
    } else if (input == "Subtração") {
        let n1 = parseInt(prompt("Digite um número: "));
        let n2 = parseInt(prompt("Digite outro número: "));
        return alert(n1 - n2)
    } else if (input == "Multiplicação") {
        let n1 = parseInt(prompt("Digite um número: "));
        let n2 = parseInt(prompt("Digite outro número: "));
        return alert(n1 * n2)
    } else if (input == "Divisão") {
        let n1 = parseInt(prompt("Digite um número: "));
        let n2 = parseInt(prompt("Digite outro número: "));
        return alert(n1 / n2)
    }
}





console.log(cpf)


