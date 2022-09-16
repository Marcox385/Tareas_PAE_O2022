// 727272 - Cordero Hernández, Marco Ricardo; Tarea 2
const express = require('express');
const path = require('path');
require('dotenv').config();
const { engine } = require('express-handlebars');

const app = express();
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Página principal (búsqueda)
app.get('/', (req, res) => {
    res.render('index', {
        title: "Example App: Home"
    });
})

app.listen(port, () => {
    console.log('App is running in port 3000');
})

// Primero se definen los middlewares y finalmente el controlador
// app.use(r, a, b, c, ...) -> app.use('/api', )

/*  Flujo ideal
    1. express
    2. app
    3. engine handlebars
    4. man.handlebars
    5. definir puerto process.env || 3000
    6. app listen
    7. static middleware
    8. app.get /
        8.1 fetch noticias
        8.2 render noticias
        8.3 handlebars
    
    ALT
    8. app.get /
        8.1 render form --> <form action='ruta' method='verbo'> --> <form action='noticias' method='GET'>
*/

/* Para mostrar noticias
    app.get -> fetch noticias -> render noticias

    render('index', { // Va en get para express (ej /noticias)
        noticias: response.articles
    })

    -- hand
    {#each not}
        <div>{{title}}</div>
    {/each}
*/