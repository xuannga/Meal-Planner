const bCrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('passport')

/**
     * @param {passport} passport
     * @param {User} user
 */
async function main(passport, user) {

    const User = user;
    const LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(

        // Corresponds our login info with passports built in attributes for username and password.
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,

        },

        async function (req, email, password, done) {

            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            const userData = await User.findOne({
                where: {
                    email: email
                }
            })

            if (userData) {
                return done(null, false, { message: 'That email is already taken' });
            } else {
                var userPassword = generateHash(password);

                var data = {
                    email: email,
                    password: userPassword,
                    name: req.body.name
                };

                const newUser = await User.create(data)

                if (!newUser) {
                    return done(null, false);
                }

                if (newUser) {
                    return done(null, newUser);
                }
            }
        }
    ));
}

module.exports = main