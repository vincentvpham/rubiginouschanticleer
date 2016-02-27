var _ = require( 'underscore' );
//ONE EXAMPLE-PACKAGE OF 10 MOVIES, ALREADY FORMATTED. TO SEE API RESPONSE: SEE BELOW




var examplePackage = [
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
    },
    {
      "poster_path": "/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
      "adult": false,
      "overview": "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
      "release_date": "2015-12-25",
      "genre_ids": [
        37,
        18,
        12,
        53
      ],
      "id": 281957,
      "original_title": "The Revenant",
      "original_language": "en",
      "title": "The Revenant",
      "backdrop_path": "/uS1SkjVviraGfFNgkDwe7ohTm8B.jpg",
      "popularity": 18.502011,
      "vote_count": 1456,
      "video": false,
      "vote_average": 7.25
    },
    {
      "poster_path": "/fYzpM9GmpBlIC893fNjoWCwE24H.jpg",
      "adult": false,
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "release_date": "2015-12-15",
      "genre_ids": [
        28,
        12,
        878,
        14
      ],
      "id": 140607,
      "original_title": "Star Wars: The Force Awakens",
      "original_language": "en",
      "title": "Star Wars: The Force Awakens",
      "backdrop_path": "/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg",
      "popularity": 17.27778,
      "vote_count": 3073,
      "video": false,
      "vote_average": 7.75
    },
    {
      "poster_path": "/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
      "adult": false,
      "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
      "release_date": "2015-06-23",
      "genre_ids": [
        878,
        28,
        53,
        12
      ],
      "id": 87101,
      "original_title": "Terminator Genisys",
      "original_language": "en",
      "title": "Terminator Genisys",
      "backdrop_path": "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
      "popularity": 16.78077,
      "vote_count": 1773,
      "video": false,
      "vote_average": 6.1
    },
    {
      "poster_path": "/xSE4NBFDzqedwa4AIj99r1Z7ljF.jpg",
      "adult": false,
      "overview": "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
      "release_date": "2015-11-25",
      "genre_ids": [
        18
      ],
      "id": 312221,
      "original_title": "Creed",
      "original_language": "en",
      "title": "Creed",
      "backdrop_path": "/nF4kmc4gDRQU4OJiJgk6sZtbJbl.jpg",
      "popularity": 16.757116,
      "vote_count": 461,
      "video": false,
      "vote_average": 7.26
    },
    {
      "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
      "adult": false,
      "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
      "release_date": "2015-09-30",
      "genre_ids": [
        18,
        12,
        878
      ],
      "id": 286217,
      "original_title": "The Martian",
      "original_language": "en",
      "title": "The Martian",
      "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
      "popularity": 15.496639,
      "vote_count": 2541,
      "video": false,
      "vote_average": 7.59
    },
    {
      "poster_path": "/t5tGykRvvlLBULIPsAJEzGg1ylm.jpg",
      "adult": false,
      "overview": "A father is without the means to pay for his daughter's medical treatment. As a last resort, he partners with a greedy co-worker to rob a casino. When things go awry they're forced to hijack a city bus.",
      "release_date": "2015-11-13",
      "genre_ids": [
        28,
        53
      ],
      "id": 336004,
      "original_title": "Heist",
      "original_language": "en",
      "title": "Heist",
      "backdrop_path": "/cBlnfR0n1GA2vPoUQNcbL9pb3VW.jpg",
      "popularity": 13.133614,
      "vote_count": 97,
      "video": false,
      "vote_average": 5.63
    },
    {
      "poster_path": "/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
      "adult": false,
      "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
      "release_date": "2015-12-25",
      "genre_ids": [
        18,
        9648,
        53,
        37
      ],
      "id": 273248,
      "original_title": "The Hateful Eight",
      "original_language": "en",
      "title": "The Hateful Eight",
      "backdrop_path": "/sSvgNBeBNzAuKl8U8sP50ETJPgx.jpg",
      "popularity": 12.88405,
      "vote_count": 1010,
      "video": false,
      "vote_average": 7.26
    }
];

exports.getAllMovies = function() {
  return examplePackage;
};

exports.getMovie = function( id ) {
  return _.find( exports.getAllMovies(), function( movie ) {
    return movie.id === id;
  });
};

exports.getMoviePackage = function( packageNumber ){
  return examplePackage;                                        //only returns exampleData for now
};















//THIS IS AN AVERAGE API RETURN FROM THE_MOVIE_DATABASE:
exports.exampleApiResponse = {
  "page": 1,
  "results": [
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
    },
    {
      "poster_path": "/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
      "adult": false,
      "overview": "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
      "release_date": "2015-12-25",
      "genre_ids": [
        37,
        18,
        12,
        53
      ],
      "id": 281957,
      "original_title": "The Revenant",
      "original_language": "en",
      "title": "The Revenant",
      "backdrop_path": "/uS1SkjVviraGfFNgkDwe7ohTm8B.jpg",
      "popularity": 18.502011,
      "vote_count": 1456,
      "video": false,
      "vote_average": 7.25
    },
    {
      "poster_path": "/fYzpM9GmpBlIC893fNjoWCwE24H.jpg",
      "adult": false,
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "release_date": "2015-12-15",
      "genre_ids": [
        28,
        12,
        878,
        14
      ],
      "id": 140607,
      "original_title": "Star Wars: The Force Awakens",
      "original_language": "en",
      "title": "Star Wars: The Force Awakens",
      "backdrop_path": "/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg",
      "popularity": 17.27778,
      "vote_count": 3073,
      "video": false,
      "vote_average": 7.75
    },
    {
      "poster_path": "/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
      "adult": false,
      "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
      "release_date": "2015-06-23",
      "genre_ids": [
        878,
        28,
        53,
        12
      ],
      "id": 87101,
      "original_title": "Terminator Genisys",
      "original_language": "en",
      "title": "Terminator Genisys",
      "backdrop_path": "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
      "popularity": 16.78077,
      "vote_count": 1773,
      "video": false,
      "vote_average": 6.1
    },
    {
      "poster_path": "/xSE4NBFDzqedwa4AIj99r1Z7ljF.jpg",
      "adult": false,
      "overview": "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
      "release_date": "2015-11-25",
      "genre_ids": [
        18
      ],
      "id": 312221,
      "original_title": "Creed",
      "original_language": "en",
      "title": "Creed",
      "backdrop_path": "/nF4kmc4gDRQU4OJiJgk6sZtbJbl.jpg",
      "popularity": 16.757116,
      "vote_count": 461,
      "video": false,
      "vote_average": 7.26
    },
    {
      "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
      "adult": false,
      "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
      "release_date": "2015-09-30",
      "genre_ids": [
        18,
        12,
        878
      ],
      "id": 286217,
      "original_title": "The Martian",
      "original_language": "en",
      "title": "The Martian",
      "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
      "popularity": 15.496639,
      "vote_count": 2541,
      "video": false,
      "vote_average": 7.59
    },
    {
      "poster_path": "/t5tGykRvvlLBULIPsAJEzGg1ylm.jpg",
      "adult": false,
      "overview": "A father is without the means to pay for his daughter's medical treatment. As a last resort, he partners with a greedy co-worker to rob a casino. When things go awry they're forced to hijack a city bus.",
      "release_date": "2015-11-13",
      "genre_ids": [
        28,
        53
      ],
      "id": 336004,
      "original_title": "Heist",
      "original_language": "en",
      "title": "Heist",
      "backdrop_path": "/cBlnfR0n1GA2vPoUQNcbL9pb3VW.jpg",
      "popularity": 13.133614,
      "vote_count": 97,
      "video": false,
      "vote_average": 5.63
    },
    {
      "poster_path": "/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
      "adult": false,
      "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
      "release_date": "2015-12-25",
      "genre_ids": [
        18,
        9648,
        53,
        37
      ],
      "id": 273248,
      "original_title": "The Hateful Eight",
      "original_language": "en",
      "title": "The Hateful Eight",
      "backdrop_path": "/sSvgNBeBNzAuKl8U8sP50ETJPgx.jpg",
      "popularity": 12.88405,
      "vote_count": 1010,
      "video": false,
      "vote_average": 7.26
    },
    {
      "poster_path": "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
      "adult": false,
      "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
      "release_date": "2015-06-17",
      "genre_ids": [
        10751,
        16,
        12,
        35
      ],
      "id": 211672,
      "original_title": "Minions",
      "original_language": "en",
      "title": "Minions",
      "backdrop_path": "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
      "popularity": 12.120946,
      "vote_count": 2214,
      "video": false,
      "vote_average": 6.65
    },
    {
      "poster_path": "/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
      "adult": false,
      "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
      "release_date": "2015-07-14",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 102899,
      "original_title": "Ant-Man",
      "original_language": "en",
      "title": "Ant-Man",
      "backdrop_path": "/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg",
      "popularity": 11.837686,
      "vote_count": 2601,
      "video": false,
      "vote_average": 6.87
    },
    {
      "poster_path": "/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
      "adult": false,
      "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
      "release_date": "2015-06-21",
      "genre_ids": [
        35,
        16,
        10751
      ],
      "id": 150540,
      "original_title": "Inside Out",
      "original_language": "en",
      "title": "Inside Out",
      "backdrop_path": "/szytSpLAyBh3ULei3x663mAv5ZT.jpg",
      "popularity": 11.422579,
      "vote_count": 2611,
      "video": false,
      "vote_average": 8.04
    },
    {
      "poster_path": "/2ZckiMTfSkCep2JTtZbr73tnQbN.jpg",
      "adult": false,
      "overview": "An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.",
      "release_date": "2015-11-14",
      "genre_ids": [
        14,
        16,
        35,
        10751,
        12
      ],
      "id": 105864,
      "original_title": "The Good Dinosaur",
      "original_language": "en",
      "title": "The Good Dinosaur",
      "backdrop_path": "/pDuD96Fz0ZZXf9buEvRu1UQsmFT.jpg",
      "popularity": 11.257173,
      "vote_count": 432,
      "video": false,
      "vote_average": 6.41
    },
    {
      "poster_path": "/3WD6E1QcYQHNMPWXEvtivyQ7waQ.jpg",
      "adult": false,
      "overview": "When a band of brutal gangsters led by a crooked property developer make a play to take over the city, Master Ip is forced to take a stand.",
      "release_date": "2015-12-19",
      "genre_ids": [
        28
      ],
      "id": 365222,
      "original_title": "葉問3",
      "original_language": "cn",
      "title": "Ip Man 3",
      "backdrop_path": "/1QzLnLBC4dZzMELT89GX79pXlqe.jpg",
      "popularity": 10.624822,
      "vote_count": 74,
      "video": false,
      "vote_average": 5.03
    },
    {
      "poster_path": "/nokkbw7qbEj4qISQSWuTqltkaIo.jpg",
      "adult": false,
      "overview": "During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan, recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man's freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel, the convicted spy who Donovan defended in court.",
      "release_date": "2015-10-15",
      "genre_ids": [
        53,
        18
      ],
      "id": 296098,
      "original_title": "Bridge of Spies",
      "original_language": "en",
      "title": "Bridge of Spies",
      "backdrop_path": "/bTgqCfMeBgmkcZr2Zw7xO8WlhzK.jpg",
      "popularity": 9.742705,
      "vote_count": 711,
      "video": false,
      "vote_average": 6.92
    },
    {
      "poster_path": "/nN4cEJMHJHbJBsp3vvvhtNWLGqg.jpg",
      "adult": false,
      "overview": "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
      "release_date": "2015-11-18",
      "genre_ids": [
        12,
        28,
        18
      ],
      "id": 131634,
      "original_title": "The Hunger Games: Mockingjay - Part 2",
      "original_language": "en",
      "title": "The Hunger Games: Mockingjay - Part 2",
      "backdrop_path": "/qjn3fzCAHGfl0CzeUlFbjrsmu4c.jpg",
      "popularity": 9.643397,
      "vote_count": 1049,
      "video": false,
      "vote_average": 6.92
    },
    {
      "poster_path": "/b0f5Thd0IVYVUcteQAtcnwdta0c.jpg",
      "adult": false,
      "overview": "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as \"Tomorrowland.\"",
      "release_date": "2015-05-19",
      "genre_ids": [
        28,
        10751,
        12
      ],
      "id": 158852,
      "original_title": "Tomorrowland",
      "original_language": "en",
      "title": "Tomorrowland",
      "backdrop_path": "/fQbc5XuB4vWA9gnY1CmyxFaOufF.jpg",
      "popularity": 9.572935,
      "vote_count": 1301,
      "video": false,
      "vote_average": 6.24
    },
    {
      "poster_path": "/ngKxbvsn9Si5TYVJfi1EGAGwThU.jpg",
      "adult": false,
      "overview": "The true story of how The Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
      "release_date": "2015-11-06",
      "genre_ids": [
        18,
        36,
        53
      ],
      "id": 314365,
      "original_title": "Spotlight",
      "original_language": "en",
      "title": "Spotlight",
      "backdrop_path": "/gpaOYwHCF2O5PM5sqFpfzKWuQvb.jpg",
      "popularity": 9.227233,
      "vote_count": 316,
      "video": false,
      "vote_average": 7.69
    },
    {
      "poster_path": "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
      "adult": false,
      "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
      "release_date": "2015-04-22",
      "genre_ids": [
        28
      ],
      "id": 99861,
      "original_title": "Avengers: Age of Ultron",
      "original_language": "en",
      "title": "Avengers: Age of Ultron",
      "backdrop_path": "/570qhjGZmGPrBGnfx70jcwIuBr4.jpg",
      "popularity": 9.126838,
      "vote_count": 3198,
      "video": false,
      "vote_average": 7.48
    }
  ],
  "total_results": 9374,
  "total_pages": 469
}