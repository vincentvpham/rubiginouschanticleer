var Sessions_Movies = require ('./sessions_movies');
var env = require('../env/env.js');
var api_key = env.api_key;
var searchUrl = 'http://api.themoviedb.org/3/search/movie';
var request = require('request');


module.exports = {
};