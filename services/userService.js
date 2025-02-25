
const User = require('../models/User');

class userService {
    static async regUser(userData){
        try{
            const savedUser = await userData.save();
            return savedUser;
        }catch(error){
            throw error;
        }
    }

    static async getUsers(){
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userService;