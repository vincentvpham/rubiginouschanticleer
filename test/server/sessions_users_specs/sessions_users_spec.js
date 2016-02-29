var expect = require('expect.js');
var Session = require('../../../server/sessions_users/sessions_usersController.js');

describe('Session_UserController', function() {
  describe('getUsersInOneSession', function () {
    it('should be a function', function () {
      expect(Session.getUsersInOneSession).to.be.a('function');
    });
  });
});
