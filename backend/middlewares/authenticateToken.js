const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        req.flash('error_msg', 'Token manquant');
        return res.json({success: false, message: 'Token manquant', redirectTo: "/signin"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            req.flash('error_msg', 'Token invalide ou expiré');
            return res.json({success: false, message: "Token invalide ou expiré", redirectTo: "/signin"});

        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;