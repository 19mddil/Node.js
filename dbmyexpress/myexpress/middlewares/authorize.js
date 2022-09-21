const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied, No token provided');
    try {
        token = token.split(" ")[1].trim();
        req.user = jwt.verify(token, process.env.mySecretKey);
        next();
    } catch (err) {
        return res.status(400).send('Invalid Token');
    }
}