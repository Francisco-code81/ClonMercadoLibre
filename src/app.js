const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Hola mundo'));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});