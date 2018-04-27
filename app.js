const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Use { Page, User } because you want to be able to access specifically which model, not just the encompassing db
const { db } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;


const init = async () => {
  // this drops all tables then recreates them based on our JS definitions
    // want to drop and recreate so there are no repeat data or mistakes
  await db.sync({force: true});

  // Ensures that your page and user data are being synced BEFORE browser is run
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

init();
