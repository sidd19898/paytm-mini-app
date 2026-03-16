const connectDB = require("../config/db.js");
const mongoose = require("mongoose");
connectDB();

const accountschema = new mongoose.Schema({

    userid :{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
    },
    
    balance: {
    type:Number,
    required:true
    }
});

const Accounts = mongoose.model('Account',accountschema);

module.exports = Accounts;