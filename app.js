const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
const keys = require('./config/keys');
const app = express();
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Sever running on port ' + PORT);
});