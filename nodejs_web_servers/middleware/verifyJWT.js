const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer')) {
        console.log('No Bearer token found'); // Debugging
        return res.sendStatus(401); // unauthorized
    }

    console.log('Authorization Header:', authHeader); // Debugging to ensure Bearer <token>

    const token = authHeader.split(' ')[1];
    if (!token) {
        console.log('Token missing after Bearer'); // Debugging
        return res.sendStatus(401); // unauthorized
    }

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) {
                console.log('JWT Error:', err); // Debugging error details
                return res.sendStatus(403); // invalid token
            }

            console.log('Decoded JWT:', decoded); // Debugging the decoded token
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
};

module.exports = verifyJWT;
