// Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// const app = express();
const port = 5050;

var proxy = require('express-http-proxy');
var app = require('express')();

// WIP - not sure how to get the proxy working, app doesn't work on server yet
app.use('/proxy', proxy('www.lunarfusion.com'));

// Static Files
app.use(express.static('public'));
// Example for other folders - not required
// app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/components', (req, res) => {
  res.render('components', { title: 'Components', layout: './layouts/full-width' });
});

app.get('/landing', (req, res) => {
  res.render('landing', { title: 'Landing Page', layout: './layouts/full-width' });
});

app.get('/content', (req, res) => {
  res.render('content', { title: 'Content', layout: './layouts/sidebar' });
});


// Add pages here

// Listen on Port 5050
// app.listen(port, () => console.info(`App listening on port ${port}`));
app.listen(5050);