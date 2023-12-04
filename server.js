const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars"); // Require express-handlebars
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" })); // Specify the default layout
app.set("view engine", "handlebars"); // Set Handlebars as the view engine

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
