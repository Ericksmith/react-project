const express = require('express');
require('./services/passport');
const app = express();
require('./routes/authRoutes');
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Sever running on port ' + PORT);
});