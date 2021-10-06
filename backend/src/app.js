const express = require('express');
require('./db/mongoose');
const cors = require('cors');

const router = require('./routes/routes.js');

require ('dotenv').config();


const app = express();
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, function(){
    console.log("Listening in port " + port);
});