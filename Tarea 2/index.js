// IS727272 - Cordero Hernández, Marco Ricardo; Tarea 2
const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();
const { engine } = require('express-handlebars');

const app = express();
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

// Para archivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/code', express.static(path.join(__dirname, 'public/src')));

// Para render engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Página principal (búsqueda)
app.get(['/', '/home', '/index'], (req, res) => {
    res.render('index');
})

// Sección de búsquedas (endpoint único)
app.get('/noticias', (req, res) => {
    const searchTerm = encodeURIComponent(req.query.search);

    axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)
        .then(response => {
            if (req.query.jsonRes === 'on') {
                res.json(response.data);
            } else {
                res.render('results', {
                  news: response.data.articles  
                })
            }            
        }).catch(err => {
                res.send('Un error inesperada ha ocurrido, intenta de nuevo...');
                console.log(err);
            }
        )
});

app.listen(port, () => {
    console.log('App is running in port 3000');
})