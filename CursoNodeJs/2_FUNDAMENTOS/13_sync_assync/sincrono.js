const fs = require('fs')

console.log("Inicio")

fs.writeFileSync("arquivo.js", "oi") //cria o arquivo e escreve nele o que eu mandar

console.log("Fim")