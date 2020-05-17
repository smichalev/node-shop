const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();

app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.session,
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('routes')(app);

app.listen(config.port, () => {
	console.log(`Server start at port ${config.port}`);
});