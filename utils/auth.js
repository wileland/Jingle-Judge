// const withAuth = (req, res, next) => {
//     if (req.session.userId) {
//       return res.redirect("/"); // Redirect to home if already logged in
//     }
//     next();
//   };

const withAuth = (req, res, next) => {

    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {

      next();
    }
  };
  

  module.exports = withAuth;