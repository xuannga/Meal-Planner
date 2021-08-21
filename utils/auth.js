const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/login');
    }
  };
  
  module.exports = withAuth;
  