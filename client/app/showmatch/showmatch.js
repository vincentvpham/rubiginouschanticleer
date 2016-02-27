angular.module( 'moviematch.showmatch', [] )

  .controller( 'ShowmatchController', function( $scope ) {

    $scope.session = {};
    $scope.user = {};
    $scope.imgPath = 'http://image.tmdb.org/t/p/w500';


    $scope.moviePackage = [
      {
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
      },
      {
        "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
        "adult": false,
        "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
        "release_date": "2015-05-13",
        "genre_ids": [
          878,
          53,
          28,
          12
        ],
        "id": 76341,
        "original_title": "Mad Max: Fury Road",
        "original_language": "en",
        "title": "Mad Max: Fury Road",
        "backdrop_path": "/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
        "popularity": 24.874131,
        "vote_count": 3744,
        "video": false,
        "vote_average": 7.47
      },
      {
        "poster_path": "/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
        "adult": false,
        "overview": "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        "release_date": "2015-10-26",
        "genre_ids": [
          28,
          12,
          80
        ],
        "id": 206647,
        "original_title": "Spectre",
        "original_language": "en",
        "title": "Spectre",
        "backdrop_path": "/wVTYlkKPKrljJfugXN7UlLNjtuJ.jpg",
        "popularity": 22.938967,
        "vote_count": 2044,
        "video": false,
        "vote_average": 6.29
      }
    ];

    $scope.currMovie = $scope.moviePackage[0];
  });
