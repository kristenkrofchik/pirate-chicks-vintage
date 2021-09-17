'use strict';

/** Handle common auth cases in routes */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const { UnauthorizedError } = require('../expressError');

/**Authenticate user. If a token provided: verify it, if valid, store token payload  on res.locals*/

function authenticateJWT(req, res, next) {
    try {
        const authHeader = req.headers && req.headers.authorization;
        if(authHeader) {
            const token = authHeader.replace(/^[Bb]earer /, "").trim();
            res.locals.user = jwt.verify(token, SECRET_KEY);
        }
        return next();
    } catch (err) {
        return next();
    }
}

/**Ensure user is logged in. If not, raise Unauthorized */

function ensureLoggedIn(req, res, next) {
    try {
        if(!res.locals.user) throw new UnauthorizedError();
        return next();
    } catch (err) {
        return next(err);
    }
}

/**Ensure correct user- user must proivde a valid token and match username. If not, raise Unauthorized */

function ensureCorrectUser(req, res, next) {
    try {
        const user = res.locals.user;
        if(!(user && user.username === req.params.username)) {
            throw new UnauthorizedError();
        }
        return next();
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    authenticateJWT,
    ensureLoggedIn, 
    ensureCorrectUser
};