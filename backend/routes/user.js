require("dotenv").config();
const express = require("express");
const zod = require("zod");
const User = require("../model/User.js");
const Accounts = require("../model/Accounts.js")
const jwt = require("jsonwebtoken");
const authmiddleware = require("../middleware/Middleware.js");
const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET


const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
	firstname: zod.string(),
	lastname: zod.string(),
})

router.post("/signup", async (req, res) => {

    const { success } = signupBody.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })

    const userid = user._id;

    await Accounts.create({
        userid,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userid
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})


router.post("/signin", async(req,res) =>{
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
        UserId : User._id
    }, JWT_SECRET);

    res.json({
        token: token,
    })
    return;
    }
         res.status(411).json({
            message: "error while looging in"
        })

})

const updateBody = zod.object({
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional(),
})

router.post("/profile",async(req,res)=>{
    const token = req.headers.authorization
    console.log(token)
    console.log("hitting profile")
})


router.put("/update",authmiddleware,async(req,res) => {
    const { success } = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message:"Error while updating information"
        })
    }
    await User.updateOne({_id:req.userId},req.body);
    res.json({
        message:"updated successfully"
    })
})

router.get("/bulk",authmiddleware,async(req,res)=>{
    console.log("hitting")
    const filter = req.query.filter ||"";

    const users = await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }
        },{
            lastname:{
                "$regex":filter
            }
        }]

    })

    res.json({
        user:users.map(user => ({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })
})


module.exports = router;

