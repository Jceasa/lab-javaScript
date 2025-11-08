const n1 = Number(prompt("Digita a nota 1: "));
const n2 = Number(prompt("Digita a nota 2: "));
const n3 = Number(prompt("Digita a nota 3: "));
const n4 = Number(prompt("Digita a nota 4: "));

soma = n1 + n2 + n3 + n4;

let media = soma / 4;

if (media >= 7) {
    console.log("Aprovado")
} else if (media >= 5 && media <= 6.9) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}