'use strict';
const StaticFileHandler = require('serverless-aws-static-file-handler');
const express = require('express');
const path = require('path');
const app = express();

const clientFilesPath = path.join(__dirname, './build/');
const fileHandler = new StaticFileHandler(clientFilesPath);

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

module.exports.handler = async (event, context) => {
	event.path = 'index.html';
	return fileHandler.get(event, context);
};
