const express = require('express')
const app = express()
const port = 3000 //variável de ambiente

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})
app.get('/wendelluan', (req, res) => {
    res.send('index.html')
})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)

})