require("dotenv").config();
const express = require("express");
const app = express()
const port = process.env.PORT
const cors = require('cors');

app.use(cors())
app.use(express.json());

const router = require('./routes/routes.js');
app.use('/api/v1',router)

app.listen(port, ()=> {
    console.log(`app is running on port ${port}`)
})


