import express from 'express';
import bodyParser from 'body-parser';
import {init, userValid} from './db/repo';
const app = express();
init();
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', async (req, res) => {
  const validUser = await userValid(req.body.username, req.body.password);
  if (validUser) res.status(200).send(`Welcome, ${validUser.username}!`);
  else res.status(403).send("Bad username and/or password");
});

module.exports = app;
