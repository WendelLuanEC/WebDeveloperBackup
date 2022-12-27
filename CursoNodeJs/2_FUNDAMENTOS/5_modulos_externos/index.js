const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const email = args['email']
const jogoFavorito = args['gameFavorite']
const jobPreference = args['jobPreference']
const cpf = args['cpf']

console.log(nome)
console.log(email)
console.log(jogoFavorito)
console.log(jobPreference)
console.log(cpf)

console.log(`the name is ${nome}, email is ${email}, favorite game is: ${jogoFavorito} and CPF is: ${cpf}`)
