function ola(nome){
    console.log('boa noite ' + nome)
}
console.log(ola("joao"))

let dude = {
    nome : "João",
    idade : 17,
    falar() {
        console.log('Olá ' + this.nome)
    }
}
dude.falar()

function exibirtarefa(id, titulo, prioridade){
    return `tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`
}
for (i=1; i<=5; i++){
    console.log(exibirtarefa(i, 'fazer isso', 'alta'))
}

function criarTarefa(titulo, descricao = "Sem descrição", prioridade = "média", concluida = false){
    return{
        id: Date.now(),
        titulo,
        descricao,
        prioridade, 
        concluida,
        data: new Date()
    };
}

console.log(criarTarefa("fazer este exercício"))
