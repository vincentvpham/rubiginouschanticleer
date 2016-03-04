var Genre = require( './genres' );

module.exports = {

  getAllGenres: function() {},

  getGenre: function( req, res, next ) {
    var genre = req.params.genre;
    var options = {
      method: 'GET',
      url: 'http://api.themoviedb.org/3/search/movie',
      qs:
        {
          api_key: 'c062102bb9e2f7a7ab5d2a0f7fb7f2d0',
        query: query
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
