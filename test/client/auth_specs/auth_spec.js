describe('AuthController', function() {
  beforeEach(module(‘movieMatch’));

  describe('signin()', function() {
    it('should signin correctly', inject(function( $controller ) {
      var scope = {};
      var authController = $controller('AuthController', {
        $scope: scope,
        $window: window
      });

      scope.user = {
        username: 'Jing',
        password: 'jing'
      };

      authController.signin();

      expect(!!window.localStorage.getItem( 'com.moviematch' )).to.eql(true);
    } ) )
  } )
} )