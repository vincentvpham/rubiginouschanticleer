module.exports = {

  getAllMovies: function() {},

  getMovie: function( req, res, next ) {
  // expects req.params.movie_id
  /* STUB FOR TESTING, REMOVE WHEN THIS FUNCTION IS IMPLEMENTED */
    if( req.params.movie_id == 1 ) {
      res.json( {
        "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
        "adult": false,
        "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
        "release_date": "2015-06-09",
        "genre_ids": [
          28,
          12,
          878,
          53
        ],
        "id": 135397,
        "original_title": "Jurassic World",
        "original_language": "en",
        "title": "Jurassic World",
        "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
        "popularity": 28.042069,
        "vote_count": 3884,
        "video": false,
        "vote_average": 6.71
      } );
    } else {
      res.json( null );
    }
  /* END STUB */
  }

};
