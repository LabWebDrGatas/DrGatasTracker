const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');

const router = require('./routes/routes.js');
const httpError = require('./models/errorModel');

require ('dotenv').config();


const app = express();
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(router);

//non existing route
app.use((req, res, next) => {
    const error = new httpError('This route was not found', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'Unknown server error!',
                error: error.err || ""
    });
})


if(process.env.NODE_ENV === 'production'){
    var connectionURL = process.env.connectionURL
}
else{
var connectionURL = require('./config.js').connectionURL
}

//verify db connection first 
console.log("Waiting for db connection!");
mongoose.connect(connectionURL).then(() => {
    app.listen(port, function(){
        console.log("Listening in port " + port); //only listen once db is ready
    });
}).catch(err => {
    console.log({error: err,
    message: "Db not connected!"});
});

