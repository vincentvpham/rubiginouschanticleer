# Project Name

> Pithy project description

## Team

  - __Product Owner__: Steffen Baumgarten
  - __Scrum Master__: Kathy Ems
  - __Development Team Members__: Kathy Ems, Jing Lu, Steffen Baumgarten, Jake Shasteen

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [File Hierarchy](#hierarchy)
    1. [Roadmap](#roadmap)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### File Hierarchy
```js
ROOT
 |__SERVER__
 |   |- server.js                 // listens for incoming connections
 |   |
 |   |__CONFIG__
 |   |   |- middleware.js         // handles express middleware
 |   |   |- routes.js             // describes internal API endpoints
 |   |   |- db.js                 // initialize Sequelize ORM
 |   |   |- helpers.js            // error handling, etc.
 |   |   | ... etc ...
 |   |
 |   |__USERS__
 |   |   |- users.js              // describes user data ( Sequelize model / database table )
 |   |   |- usersController.js    // handles interactions with user data
 |   |
 |   |__GENRES__
 |   |   |- genres.js             // describes genre data ( Sequelize model / db table )
 |   |   |- genresController.js   // handles interactions with genre data
 |   |
 |   |__PREFS__
 |   |   |- prefs.js              // describes a user's preferred genres
 |   |   |- prefsController.js    // handles interactions with preference dataset
 |   |
 |   |__MOVIES__
 |   |   |- movies.js             // describes movie data ( dummy data, refactor later to use external API or store in db )
 |   |   |- moviesController.js   // handles interactions with movie dataset
 |   |
 |   |__SESSIONS__
 |   |   |- sessions.js           // describes session data ( in memory model for now, perhaps refactor into db later? )
 |   |   |- sessionsController.js // handles interactions with session data
 |   |
 |   |__VOTES__
 |       |- votes.js              // describes voting data ( in memory vote tracking )
 |       |- votesController.js    // handles interactions with user voting data
 |
 |__CLIENT__
     |- index.html                // main template for single page app
     |
     |__APP__
     |   |- app.js                // entry point for angular app
     |   |
     |   |__SERVICES__
     |   |   |- services.js       // angular services, factories, providers
     |   |
     |   |__AUTH__
     |   |   |- auth.js           // angular controller for tracking current user
     |   |   |- signup.html      
     |   |   |- signin.html
     |   |   |- signout.html
     |   |
     |   |__SESSIONS__
     |   |   |- sessions.js       // sessions angular controller
     |   |   |- joinsession.html  // list of available sessions to join
     |   |   |- sessionlobby.html // the lobby for a given session
     |   |
     |   |__SHOWMATCH__
     |   |   |- showmatch.html    // displays information about the movie your group matched on
     |   |
     |   |__MATCH__
     |   |   |- match.js          // match angular controller
     |   |   |- match.html        // displays info about a movie, asks for yes/no input
     |   |
     |   |__PREFERENCES__
     |       |- preferences.js    // angular controller for user preferences
     |       |- preferences.html  // displays user preferences
     |
     |__LIB__
     |   |__ANGULAR__
     |   |   |- angular.js
     |   |   | ... etc ...
     |   | ... etc ...
     |
     |__ASSETS__
     |   |                        // art assets go here
     |
     |__STYLES__
         |- styles.css            //  other style sheets go here
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
