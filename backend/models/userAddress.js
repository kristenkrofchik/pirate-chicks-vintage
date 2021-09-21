'use strict';

const db = require('../db');
const { BadRequestError, NotFoundError } = require("../expressError");


class UserAddress {
    /**Create a user address, update db, return new address data. 
     * Throws BadRequestError if address already in db
    */
     static async create({ userId, addressLine1, addressLine2, city, postalCode, usState, country, telephone }) {
        
        const result = await db.query(
            `INSERT INTO user_addresses
            (user_id, address_line_1, address_line_2, city, postal_code, us_state, country, telephone)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING user_id AS 'userId', address_line_1 AS 'addressLine1', address_line_2 AS 'addressLine2', city, postal_code AS 'postalCode', us_state AS 'usState', country, telephone`,
            [
               userId,
               addressLine1,
               addressLine2,
               city,
               postalCode,
               usState,
               country, 
               telephone
            ],
        );
        const user_address = result.rows[0];

        return user_address;
    }




}

module.exports = UserAddress;
