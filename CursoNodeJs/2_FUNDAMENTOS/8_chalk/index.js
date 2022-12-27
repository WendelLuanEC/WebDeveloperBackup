const chalk = require('chalk')

const nota = 7

if(nota>=7){
console.log(chalk.bgWhite('Parabéns você está aprovado!'))
} else {
  console.log(chalk.bgRed.bold('Você precisa fazer a prova novamente!!'))
}