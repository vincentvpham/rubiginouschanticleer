module.exports = {
  reportError: function( res, err ) {
    console.error( err.message );
    res.send( err.message );
  }
}
