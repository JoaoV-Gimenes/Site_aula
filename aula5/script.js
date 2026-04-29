const nomes = ['daniel']

nomes.push('Matheus')
console.log(nomes)

nomes.unshift('João')
console.log(nomes)

nomes.shift()
console.log(nomes)

nomes.push('José')
nomes.push('Augusto')
nomes.push('Lucas')
nomes.push('Roberto')
nomes.push('André')
nomes.push('Aristóteles')

console.log(nomes)

nomes.splice(2, 1)
console.log(nomes)

nomes.splice(2, 0, 'José')
console.log(nomes)

nomes.splice(2, 1, 'Josefina')
console.log(nomes)

nomes.forEach((t, i ) =>{
    console.log(`${i+1}.${t}`)
})

const nomesMaior = nomes.map(t => t.toUpperCase())

nomesMaior.forEach((t, i ) =>{
    console.log(`${i+1}.${t}`)
})

const nomescomL = nomesMaior.filter(t => t.includes('L'))
console.log(nomescomL)