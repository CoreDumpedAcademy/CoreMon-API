'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: {type: String, unique: true},
    password: String,
    coredex: Array,
    money: Number,
    bag: Array,
    team: Array,
});

module.exports = mongoose.model('User', UserSchema);