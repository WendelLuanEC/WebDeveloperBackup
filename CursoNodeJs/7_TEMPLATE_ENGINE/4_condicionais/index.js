const express = require('express')
const expressHbs = require('express-handlebars');

const app = express()

app.engine('handlebars', expressHbs.engine({
    layoutsDir: 'views/layouts/',
    // defaultLayout: null,
    extname: 'handlebars'
  })
);
app.set('view engine', 'handlebars');

app.get('/dashboard', (req,res)=>{
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        name: 'Wendel',
        surname: 'Sousa',
        age: '18'
    }

    const palavra = 'Teste'

    const auth = false

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, ()=>{
    console.log('App funcionando')    
})