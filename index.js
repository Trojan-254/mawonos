const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config();
const mongoose = require('mongoose');


// View engine
app.set('view engine', 'ejs');


// APP Middlewares
app.use(express.json());
// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, 'public')));


// Directory for EJS
app.set('views', path.join(__dirname, 'views'));


// Aplication routes
// Homepage route.
app.get('/', (req, res) => {
    res.render('homepage/index');
});


// About page route
app.get('/about', (req, res) => {
    res.render('about/about');
});

// Gallery route
app.get('/gallery', (req, res) => {
    res.render('gallery/gallery');
});

// Shop route
app.get('/shop', (req, res) => {
    res.render('shop/shop');
})

// Connect to mongodb
async function connectDB(retries = 5) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("Connected to database has been established....");
            return;
        } catch (err) {
            console.error(`MongoDB connection error (Attempt ${attempt}/${retries}):`, err.message);
            if (attempt < retries) {
                console.log("Retrying in 5 seconds...");
                await new Promise(res => setTimeout(res, 5000)); 
            } else {
                console.error("Max retries reached. Exiting...");
                process.exit(1); 
            }
        }
    }
}

// connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}....`);
})
