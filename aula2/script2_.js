let idade = 18
let temCarteira = true
let teste = idade >= 18 && temCarteira ? "pode dirigir" : "não pode dirigir"
console.log(teste)

console.log(idade >= 18 && temCarteira ? "pode dirigir" : "não pode dirigir")


let diaSemana = new Date().getDay()
console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Dia da semana não identificado")
        break;
}

for (i = 0; i <= 5; i++){
    console.log("Tempo: " + i)
}

let contador = 5
while (contador >= 0){
    console.log("contagem: " + contador)
    contador--
}