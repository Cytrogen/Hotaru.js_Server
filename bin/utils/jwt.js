const jwt = require('jsonwebtoken');

// Secret key for JWT.
const secretKey = 'ThisIsAFuckingSecretKEYYYYYY';

/**
 * Generate JWT using username and secret key
 * @param userName
 * @returns {*}
 */
const generateJWT = userName => {
    const payload = { username: userName };
    return jwt.sign(payload, secretKey);
};

module.exports = { generateJWT };
