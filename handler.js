// 'use strict';

const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const getCharacters = require('./ai');

const app = express();

app.use(cors());

app.get('/date', (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.post('/image', (req, res) => {
  const base64String = req.body.toString();
  try {
    getCharacters(base64String, (data) => {
      res.send(data);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
});

app.use((req, res, next) => {
  if (req.requestContext && req.requestContext.path === '/dev') {
    res.redirect('/dev/');
    return;
  }
  next();
});

app.use(express.static(path.join(__dirname, 'client', './build')));

module.exports.handler = serverless(app);
