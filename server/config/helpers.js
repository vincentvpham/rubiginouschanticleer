var jwt = require('jwt-simple');

module.exports = {

  errorLogger: function (error, req, res, next) {
    // log the error then send it to the next middleware in
    console.error(error.stack);
    next(error);
  },

  errorHandler: function (error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    res.send(500, {error: error.message});
  },

  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;

    if (!token) {
      return res.send(403); // send forbidden if a token is not provided
    }

    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }

  },

  generateGroupCode: function (length, target) {

    var code;
    var counter = 0;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var recurse = function(index, result) {

      // base case
      if (index === length) {
        // increment counter
        counter++;
        // if we are at our target
        if (counter === target) {
          // save result
          code = result;
        }
      }
      // recursive case
      else {
        for (var i = 0; i < alphabet.length; i++) {
          // recurse with index (length of string being built)
          // and string being built
          recurse(index + 1, result + alphabet[i]);
        }
      }
    }

    // initial call to recursive function
    recurse(0, '');
    // return code in the end
    return code;
  }

}
