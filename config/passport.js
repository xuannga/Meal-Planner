const bCrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },

    async function(req, email, password, done) {

        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        try {
            const userData = await User.findOne({
                where: {email: email}
            });

            if (userData) {
                return done(null, false, {message: 'That emial is already registered'})
            } else {
                const passwordHash = generateHash(password);

                const newUser = await User.create({
                    email: email,
                    password: passwordHash,
                    name: req.body.name,
                })

                if (!newUser) {
                    return done(null, false);
                }

                if (newUser) {
                    return done(null, newUser);
                }

            }
        } catch(err) {
            console.error(err);
            return done(err)
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {

    try {
        userData = await User.findByPk(id);

        if (userData) {
            done(null, userData.get( {plain:true} ));
        } else {
            done(Error('No user with that id'), null);
        }
    } catch (err) {
        console.error(err)
    }
});

module.exports = passport