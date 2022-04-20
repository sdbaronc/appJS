/* jshint esversion: 6 */
/* jshint browser: true */

// include
const express = require('express');
const path = require('path');

//import
const routes = require('./routes/routes');
const { urlencoded } = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//construct
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'library')));

//middlewares
//conection databases


// routes
app.use('/', routes);

app.get('*', (req, res) => {
    res.send('error');
});

//main
app.listen(app.get('port'), () => {
    console.log('server on port 4000');
});