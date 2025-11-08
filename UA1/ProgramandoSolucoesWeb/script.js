//const n1 = parseInt(prompt("Digite um número: "));
// n2 = parseInt(prompt("Digite outro número: "));

//resultado = n1 + n2;



function somar() {
    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `A soma dos números é: ${n1 + n2}`
}

function subtrair() {
    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `A subtração dos números é: ${n1 - n2}`
}

function multiplicar() {
    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `A multiplicação dos números é: ${n1 * n2}`
}

function dividir() {
    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `A divisão dos números é: ${n1 / n2}`
}