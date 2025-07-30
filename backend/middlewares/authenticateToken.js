const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.json({success: false, message: 'Token manquant', redirectTo: "/signin"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.json({success: false, message: "Token invalide ou expiré", redirectTo: "/signin"});
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;