const UserModel = require("../models/UserModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (user) {
            res.status(403).json({ success: false, message: 'User allreday registered' })
        }
        const profileImage = req.file ? req.file.path : null;
        const hashPassword = await bcrypt.hash(String(password), 10)
        const newUser = new UserModel({
            ...req.body,
            password: hashPassword,
            profileImage
        })
        await newUser.save()
        res.status(200).json({ success: true, message: 'user successfully registered ', data: newUser })
    } catch (err) {
        console.log('see createUser error', err)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) {
            res.status(403).json({ success: false, message: 'User bot found' })
        }
        const isMatch = await bcrypt.compare(String(password), user.password)
        if (!isMatch) {
            return res.status(403).json({ success: false, message: 'password not matched' })
        }
        const jwtToken = jwt.sign(
            {
                _id: user._id, role: user.role,
                email: user.email, image: user.profileImage,
                name: user.name
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' })
        res.status(200).json({
            success: true,
            message: 'sucessfully loggedin',
            jwtToken,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                image: user.profileImage
            }
        })
    } catch (err) {
        console.log('see login user error', err)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        if (!email) {
            if (!email) return res.status(400).json({ success: false, message: "Email is required" });
        }
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: 'successfully got user',
            user: {
                email: user.email,
                name: user.name,
                image: user.profileImage
            }
        })
    } catch (err) {
        console.log('see login user error', err)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

module.exports = { createUser, loginUser, getUserByEmail }