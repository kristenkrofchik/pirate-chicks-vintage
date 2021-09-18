"use strict";

const db = require('../db');
const bcrypt = require('bcrypt');
const { NotFoundError, BadRequestError, UnauthorizedError } = require('../expressError');

const { BCRYPT_WORK_FACTOR } = require('../config.js');

class User {

    /**Authenticate user with username, password.
     * Returns { username, firstName, lastName, email }
     * Throws UnauthorizedError if user not found or password wrong.
     **/

    static async authenticate(username, password) {
        const result = await db.query(
            `SELECT username,
                    password,
                    first_name AS 'firstName',
                    last_name AS 'lastName',
                    email
            FROM users
            WHERE username = $1`,
            [username],
        );

        const user = result.rows[0];

        if (user) {
            //compare hashed password to new hash
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid === true) {
                delete user.password;
                return user;
            }
        }

        throw new UnauthorizedError('Invalid username/password. Please try again.');
    }

    /**Register user with data.
     * Returns { username, firstName, lastName, email }
     * Throws BadRequestError on duplicates
     **/

    static async register(
        { username, password, firstName, lastName, email }) {
            const duplicateCheck = await db.query(
                `SELECT username
                FROM users
                WHERE username = $1`,
                [username],
            );

            if(duplicateCheck.rows[0]) {
                throw new BadRequestError(`That username has been taken by another user. Please choose another username.`);
            }

            const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

            const result = await db.query(
                `INSERT INTO users
                (username,
                password, 
                first_name,
                last_name,
                email)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING username, first_name AS 'firstName', last_name AS 'lastName', email`,
                [
                    username,
                    hashedPassword,
                    firstName,
                    lastName,
                    email
                ],
            );

            const user = result.rows[0];

            return user;
        }





}