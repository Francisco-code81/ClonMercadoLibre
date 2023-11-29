const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor abierto'));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});