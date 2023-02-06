//epress is server framework will help us to set up the server
const express = require('express')
//body parse is to parse the request and create a request and create request that body so when we make api calls we want to get request from the calls made from client side.
const bodyParser = require('body-parser')
//cors stands for cross origin resource sharing.
const cors = require('cors')

const db = require('./db')
const app = express();
const productRouter = require('./routes/productRouter')

//this defines from where we are allowing to make API calls.
var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, "MongoDB connection error"));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Food Ordering"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/', productRouter);
