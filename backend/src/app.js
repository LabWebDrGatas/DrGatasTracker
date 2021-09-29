const cors = require('cors');
const express = require('express');


require ('dotenv').config();


const app = express();
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.listen(port, function(){
    console.log("Listening in port " + port);
});