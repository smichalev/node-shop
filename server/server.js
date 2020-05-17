const express = require('express');
const bodyParser = require('body-parser');
const port = 3333;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('routes')(app);

app.listen(port, () => {
	console.log(`Server start at port ${port}`);
});