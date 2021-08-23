const User = require('../models/User');
const router = require('express').Router();
const passport = require('../config/passport');

router.post('/', passport.authenticate('local-signup'), (req, res) => {

    res.status(200).json( {message: 'signup successful'} )

})

router.post('/login', passport.authenticate('local-login'), (req, res) => {

    res.status(200).json( {message: 'login successful'} )

})

router.post('/logout', (req, res) => {

    if (req.isAuthenticated()) {
        req.session.destroy( () => { res.status(204).end() });
    } else {
        res.status(404).end();
    }
});

module.exports = router;