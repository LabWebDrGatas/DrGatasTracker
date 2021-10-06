const mongoose = require('mongoose')
if(process.env.NODE_ENV === 'production'){
  var connectionURL = process.env.connectionURL
}
else{
  var connectionURL = require('../config.js').connectionURL
}

mongoose.connect( connectionURL, {}, () => {console.log('Connected to db');});
