let titulo = 'aprender JavaScript';
let descricao = 'Estudar manipulação de Strings';

console.log('O comprimento do título é: ', titulo.length)
console.log('A primeira letra do título é: ', titulo[0])
console.log('A ultima letra do título é: ', titulo[titulo.length - 1])
console.log(`Posição da palavra "JavaScript": ${titulo.indexOf("JavaScript")}`)

const truncarDescricao = (texto, maxlength = 30) => {
    if (texto.length <= 30){
        return texto;
    }
    return `${texto.substring(0, maxlength)} ...`;
}

let tags = "a,b,c,d"
let novatags = tags.split(",")
console.log(novatags)
let stringTags = novatags.join('-')
console.log(stringTags)