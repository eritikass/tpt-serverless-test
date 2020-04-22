'use strict';
const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const app = express();

app.get('/date', (req, res) => {
	res.json({
		date: new Date(),
	});
});

app.use(function (req, res, next) {
	if (req.requestContext && req.requestContext.path === '/dev') {
		res.redirect('/dev/');
		return;
	}
	next();
});

app.use(express.static(path.join(__dirname, './build')));
module.exports.handler = serverless(app);
