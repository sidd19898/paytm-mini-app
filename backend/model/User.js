const connectDB = require("../config/db.js");
const mongoose = require("mongoose");
connectDB();

const userSchema = new mongoose.Schema({

    username: {
        type: String,
    },

    password: {
        type: String,
    },

    firstname: {
        type: String,
    },

    lastname: {
        type: String,
    }
    
});

const User = mongoose.model('user', userSchema);

module.exports = User;


