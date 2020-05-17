const express = require('express');
const port = 3333;

const app = express();

require('routes')(app);

app.listen(port, () => {
	console.log(`Server start at port ${port}`);
});