
const User = require('../models/User');
const userService = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        const userData = {
            personalInfo: {
                username: req.body.personalInfo.username,
                email: req.body.personalInfo.email,
                password: req.body.personalInfo.password,
                phonenumber: req.body.personalInfo.phonenumber
            },
            deliveryAddress: req.body.deliveryAddress,
            billingAddress: req.body.billingAddress
        };

        const newUser = new User(userData);
        const savedUser = await userService.regUser(newUser);
        res.status(201).json({
            success: true,
            data: savedUser
        }); 
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

const getUsers = async(req, res) => {
    try{
        const users = await userService.getUsers();
        res.status(200).json(users)
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = { registerUser, getUsers }