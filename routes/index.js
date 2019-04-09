const routes = require('express').Router();

const mons = require('./mons');
const users = require('./users');

routes.use('/users', users);
routes.use('/mons', mons);

module.exports = routes;