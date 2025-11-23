const User = require('../models/userSchema');

exports.registerUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
