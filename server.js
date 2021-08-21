require('dotenv').config();

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

async function init() {
    // Initialize express app and set up port.
    const app = express();
    const PORT = process.env.PORT || 3001;

    // Initialize Session
    const sess = {
        secret: process.env.SESS_SECRET,
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        })
    };

    app.use( session(sess) );

    // Initialize Handlebars engine and set app's view engine to handlebars.
    const hbs = exphbs.create();
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
   
    // Middleware for parsing requests
    app.use( express.json() );
    app.use( express.urlencoded( {extended: true} ) );
    app.use( express.static( path.join(__dirname, 'public')));

    const passport = require('./config/passport');
    // Initialize Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(routes);

    app.use(function(err, req, res, next) {
        console.log(err);
    });

    // Initialize database connection
    try {

        await sequelize.sync( {force: false} )

    } catch (error) {
        console.error(error)
    }

    app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );
}

init();