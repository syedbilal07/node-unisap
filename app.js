'use strict';

const express = require('express');
var dotenv = require('dotenv').config();
var url = process.env.MONGOLAB_URI;
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(logger('dev'));
require('./routes')(router);
app.use('/api/v1', router);
var mongoose = require('mongoose');
mongoose.connect(url);
app.listen(port);

console.log(`App Runs on ${port}`);