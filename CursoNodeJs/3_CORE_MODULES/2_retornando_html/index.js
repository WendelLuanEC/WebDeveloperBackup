const http = require("http")

const port = 3000

const server = http.createServer((req,res) => {

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando novo jeito de programar web</p>')

})

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
