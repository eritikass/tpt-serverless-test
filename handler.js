'use strict';
const StaticFileHandler = require('serverless-aws-static-file-handler');
const express = require('express');
const path = require('path');
const app = express();

const clientFilesPath = path.join(__dirname, './build/');
const fileHandler = new StaticFileHandler(clientFilesPath);

app.use(express.static(path.join(__dirname, 'build')));

module.exports.handler = async (event, context) => {
	event.path = 'index.html';
	return fileHandler.get(event, context);
};
