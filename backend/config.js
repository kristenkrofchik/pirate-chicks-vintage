'use strict'

/** Config for application as a whole */

require('dotenv').config();
require('colors');

const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';

const PORT = +process.env.PORT || 3001;

/** Use either app database or testing database */
function getDatabase() {
    return(process.env.NODE_ENV === 'test')
        ? 'pirateChicksTest'
        : process.env.DATABASE_URL || 'pirateChicks';
}

/** Speed up bcrypt for testing */
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 12;

console.log('Pirate Chicks Config:'.green);
console.log('SECRET_KEY:'.yellow, SECRET_KEY);
console.log('PORT:'.yellow, PORT.toString());
console.log('BCRYPT_WORK_FACTOR'.yellow, BCRYPT_WORK_FACTOR);
console.log('Databse:'.yellow, getDatabase());
console.log('---');

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabase
};