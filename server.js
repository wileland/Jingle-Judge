const express = require("express");
<<<<<<< HEAD
const path = require('path');
=======
const path = require("path");
>>>>>>> 2dda154bca3353403b7dd1ded92b31ff8ae9584e
const session = require("express-session");
const exphbs = require("express-handlebars"); // Update this line
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
<<<<<<< HEAD

app.use(express.static(path.join(__dirname, 'public')));

=======
app.use(express.static(path.join(__dirname, "public")));
>>>>>>> 2dda154bca3353403b7dd1ded92b31ff8ae9584e
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configure Handlebars as the view engine
app.engine("handlebars", hbs.engine); // Update this line
app.set("view engine", "handlebars"); // Set Handlebars as the view engine
<<<<<<< HEAD

app.use(routes)

=======
app.use(routes);
>>>>>>> 2dda154bca3353403b7dd1ded92b31ff8ae9584e
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});