const express = require('express');
const request = require('request');

const app = express();
app.use(express.static('dist'));
app.use(express.static(__dirname + '/imgs'))
app.use('/proxy', (req, res) => {
  const url = req.url.replace('/?url=', '');
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => console.log('App started on port 3000'));

/*
Routes are currently set up for main entry at localhost:3000 but looked after within the SPA
by react-router-dom. Corresponding server routes should be set up to enable the following
scenarios: sharing of URLs between customers or to social media sites, bookmarking to return to
later and for SEO
*/
