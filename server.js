const express = require('express');
const session = require('express-session');
const routes = require('./controllers'); // This will include apiRoutes and viewRoutes through controllers/index.js

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret', // We need to move this to an environment variable
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files directory setup (for static files like CSS, JS, images)
// app.use(express.static('public'));

app.use(routes); // This uses the routes from controllers/index.js

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
