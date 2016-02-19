var Sequelize = require( 'sequelize' );
var db = new Sequelize( 'moviematch', null, null, {
  dialect: 'sqlite',

  define: {
    underscored: true
  },

  storage: './moviematch.sqlite'
});

module.exports = db;
