const { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Cart = require('../models/Cart');
const router = require('express').Router();

router.post("/", verifyToken,async(req, res)=>{
    const newCart = Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
})
router.put('/update/:id', verifyTokenAuthorization, async(req, res)=>{
    const id = req.params.id;
    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            id,
            {
                $sete:req.body
            },
            {new:true}
        );
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(200).json(err);
    }
})
router.delete('/delete/:id', verifyTokenAuthorization, async(req, res)=>{
    const id = req.params.id;
    try{
        await Cart.findByIdAndDelete(id);
        res.status(200).json("Deleted")
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/find/:userId", verifyTokenAuthorization, async(req, res)=>{
    const id = req.params.userId;
    try{
        const cart = await Cart.findOne({userId:id});
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err)
    }
})
router.get('/',verifyTokenAndAdmin, async(req, res)=>{
    try{
        const carts = await Cart.find({});
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;