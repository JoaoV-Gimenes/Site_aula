console.table([
    {id:1, tarefa: "estudar codigos"},
    {id:2, tarefa: "fazer isso"}
])
console.log("teste")
console.info("teste2")
console.warn("ESTE É UM TESTE")
console.error("Você não tem cadastro no site")

console.group("grupinho")
console.log("Linha 1")
console.log("Linha 2")
console.log("Linha 3")
console.groupEnd()

console.time("timer")
let casa = ""
if (casa == "casa"){
    console.log("oi")
}
console.log("oi")
console.timeEnd("timer")

var a = "antigo"
let username = "Ana"
const API_URL = "url"

let frase = "olá"
let number = 43
console.log(typeof(frase) + " usuário " + typeof(number))

let texto = "oi"
let nume = 54
console.log(nume + " = " + typeof(number))

let verdadeiro = true
console.log("o valor de " + verdadeiro + " é: " + typeof(verdadeiro))

let semvalor
console.log("o valor da variavel é: " + typeof(semvalor))

let IDunico = Symbol("id")
console.log(typeof(IDunico))
console.log(IDunico)

let bigint = 59347398237485n
console.log("O valor é " + bigint )
console.log("Tipo: " + typeof(bigint))

let task = {
    id: 1, 
    titulo: "código JavaS",
    finalizada: "não",
    info: {
        nome: "João",
        email: "ojdnsjodn@gmail.com"
    }
};

let tasks = [
    {
       id: 1, 
        titulo: "código JavaS",
        finalizada: "não",
        info: {
        nome: "João",
        email: "ojdnsjodn@gmail.com"
        }
    },
    {
       id: 2, 
        titulo: "código python",
        finalizada: "não",
        info: {
        nome: "João",
        email: "ojdnsjodn@gmail.com"
        }
    }
]
console.table(tasks)

let dia = new Date()
console.log(dia)

console.log(parseInt("52"))
