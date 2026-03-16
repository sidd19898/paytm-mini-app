const express = require("express");
const router = express.Router()
const userRouter = require("./user.js")
const accountRouter = require("./account.js")

router.use("/user", userRouter);
router.use("/account", accountRouter);

router.get('/',(req, res) => {
    res.send("page 1")
})

router.get('/transferMoney',(req, res) => {
    res.send('transfermoney')
})

router.get('/balance',(req, res) => {
    res.send('balance')
})


module.exports = router;