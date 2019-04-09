'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonSchema = Schema({
    number: String,
    name: String,
});

module.exports = mongoose.model('Mon', MonSchema);