const x = '10'

//checar se um numero é inteiro
if(!Number.isInteger(x)){
  throw new Error('o valor de x não é inteiro')
}

console.log("continuando...")