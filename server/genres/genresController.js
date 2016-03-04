var Genre = require( './genres' );
var request = require('request');
var env = require('../env/env.js');
var api_key = env.api_key;

module.exports = {

  getAllGenres: function() {},

  getGenre: function( req, res, next ) {
    console.log('ALL THE WAY IN GET GENRES in genresController===========================>>>>>>>>>>');
    var genre = req.params.genre;
    var options = {
      method: 'GET',
      url: 'http://api.themoviedb.org/3/genre/movie/list',
      qs:
        {
          api_key: api_key
        // ,query: query
      },
      headers:
        {
          'postman-token': '617cd5a3-78db-0ae0-0d80-cffed6da26e4',
          'cache-control': 'no-cache'
        }
      };

    request(options, function (error, response, body) {
     if (error) throw new Error(error);
     res.end(body);
    });
  }

};
