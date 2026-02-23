const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env.config");

class JwtValidator {
    static verify(token) {
        try {
            return jwt.verify(token, jwtSecret);
        } catch (err) {
            return null;
        }
    }
}

module.exports = JwtValidator;
