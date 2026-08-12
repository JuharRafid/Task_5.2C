const express = require('express');

const path = require('path');

const mongoose = require('mongoose');

const booksRoutes = require('./routes/books.routes');


const app = express();

const PORT = 3000;

const MONGO_URI = 'mongodb://127.0.0.1:27017/booksDB';


mongoose.connect(MONGO_URI);


mongoose.connection.on('connected', () => {

    console.log('Connected to MongoDB');

});


mongoose.connection.on('error', (error) => {

    console.error('MongoDB connection error:', error);

});


app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));


app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);


app.use(
    '/api/books',
    booksRoutes
);


app.use((error, req, res, next) => {

    console.error(error);

    res.status(500).json({
        statusCode: 500,
        data: null,
        message: "Internal server error"
    });

});


app.listen(PORT, () => {

    console.log(
        `Server is running on http://localhost:${PORT}`
    );

});