const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).send({ message: "No token provided" });
    }

    jwt.verify(token, 'HAPPYREOJICE', (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: "Failed to authenticate token" });
        }

        req.userId = decoded.userId;
        req.userEmail = decoded.email;
        next();
    });
}

module.exports = verifyToken;