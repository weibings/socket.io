const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
let app = express();

app.use(express.static(publicPath));

console.log(publicPath);

app.get('/', (req, res) => {
	res.render(publicPath+'/index');
})

app.listen(3000, () => {
	console.log('Started port 3000');
})