// /backend/src/types/user.types.js

/**
 * @typedef {object} Geo
 * @property {string} lat - The latitude.
 * @property {string} lng - The longitude.
 */

/**
 * @typedef {object} Address
 * @property {string} street - The street name.
 * @property {string} city - The city.
 * @property {string} zip - The zip code.
 * @property {Geo} geo - The geographical coordinates.
 */

/**
 * @typedef {object} User
 * @property {number} [id] - The user's unique ID (auto-generated).
 * @property {string} name - The user's full name.
 * @property {string} email - The user's email address.
 * @property {string} phone - The user's phone number.
 * @property {string} company - The user's company name.
 * @property {Address} address - The user's address.
 */

// This file is just for type definitions, so we export an empty object.
module.exports = {};