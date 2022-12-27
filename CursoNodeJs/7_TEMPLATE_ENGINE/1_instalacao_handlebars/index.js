const express = require('express')
const expressHbs = require('express-handlebars');

const app = express()

app.engine('handlebars', expressHbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: null,
    extname: 'handlebars'
  })
);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.listen(3000, ()=>{
    console.log('App funcionando')    
})