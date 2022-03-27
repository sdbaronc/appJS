const express= require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


// initializacions

const app = express();

//settings 

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));




// middlewares

app.use(morgan('dev'));

// global variables
// routes
app.use(require('./routes/index'));


// public
//server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});