const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();

// View engine
app.set('view engine', 'ejs');

// Directory for EJS
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('homepage/index');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(PORT);
    console.log(`Server is up and running on port: ${PORT}....`);
})
