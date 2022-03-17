require('./config/database') // Init Database

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan'); // http requset logger
const { errorlog } = require('./app/util/logger') // System log

global.__root_path = path.join(__dirname, '/')

// global variabel
global.__logger = errorlog

const routes = require('./routes/index') // Including route

const app = express();

app.use(morgan('dev'))

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('storage', express.static('./public/storage')) // /storage/image/filename

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

// Set up static file folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes) // Init routing

module.exports = app