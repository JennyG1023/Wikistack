const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});