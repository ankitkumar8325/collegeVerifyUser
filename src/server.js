const express = require('express')
const dotenv = require('dotenv/config')
const app = express();

//handle cors


//body parser

//configure dotenv
dotenv.config({
    path:'./.env'
});

console.log(process.env.MONGO_URI)

const port = process.env.port || 3400
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});