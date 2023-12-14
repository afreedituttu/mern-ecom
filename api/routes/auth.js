const router = require('express').Router();
const User = require('../models/User')
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

router.post('/register', async(req, res)=>{
    console.log(req.body);
    const {username, email, password, age, img, address} = req.body;
    if( !username || !email || !password || !age || !address){
        return res.status(500).json('necessary informations are not filled');
    }
    const newUser = new User({
        username,
        email,
        age,
        img,
        address,
        password:CryptoJs.AES.encrypt(password, process.env.SECRET_KEY).toString()
    })
    try{
        const savedUser = await newUser.save();
        const {password, ...others} = savedUser._doc;
        res.status(201).json(others)
    }catch(err){
        console.log(err);
        res.status().json(500).json(err)
    }
})

router.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    try{
        const Userdata = await User.findOne({
            username:username
        }).lean()
        if(!Userdata) return res.status(401).json("user doesn't exist");
        const decryptedPassword = CryptoJs.AES.decrypt(Userdata.password, process.env.SECRET_KEY);
        const realPassword = decryptedPassword.toString(CryptoJs.enc.Utf8);
        if(password === realPassword){
            const {password, ...others} = Userdata;
            const accessToken = jwt.sign({
                id:Userdata._id.toString(),
                isAdmin:Userdata.isAdmin
            }, process.env.JWT_SECRET, {expiresIn:"3d"})
            res.status(200).json({...others,accessToken});
        }else{
            res.status(300).json("wrong password");
        }
    }catch(err){
        console.log(err);
        res.status(500).json({"error":"error"});
    }
})

module.exports = router;