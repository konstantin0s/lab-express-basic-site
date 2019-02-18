const express = require('express');
const app     = express();
const hbs = require('hbs');
const path    = require('path');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/home', (req, res, next) => {
  res.render('home');
});

app.get('/about', (req, res, next) => {
  res.render('about');
});

app.get('/photo', (req, res, next) => {
  res.render('photo');
}

hbs.registerPartials(__dirname + '/views/partials');

app.listen(3000, ()=> {
  console.log("listening")
});