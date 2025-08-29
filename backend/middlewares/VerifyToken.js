const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    console.log('token receive', token)
    console.log('token  secret', process.env.JWT_SECRET)
    if (!token) {
        return res.status(403).json({ success: false, message: "Invalid token" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
        return res.status(403).json({ success: false, message: 'Invaliid access token' })
    }
    req.user = decoded;
    next()
}

module.exports = verifyToken;