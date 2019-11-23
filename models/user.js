'use strict';
var dotenv = require('dotenv').config();
var url = process.env.MONGOLAB_URI;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({

    name: String,
    email: String,
    hashed_password: String,
    created_at: String,
    temp_password: String,
    temp_password_time: String

});

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = mongoose.model('user', userSchema);