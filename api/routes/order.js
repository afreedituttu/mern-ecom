const { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Order = require('../models/Order');
const router = require('express').Router();

router.post("/", verifyToken,async(req, res)=>{
    const {userId, username, products, total, address} = req.body
    const newOrder = new Order({userId, username, products, amount:total, address, paymentMethod:"cash on delivery"});
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
router.put('/update/:id', verifyTokenAuthorization, async(req, res)=>{
    const id = req.params.id;
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            {
                $sete:req.body
            },
            {new:true}
        );
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(200).json(err);
    }
})
router.delete('/delete/:id', verifyTokenAuthorization, async(req, res)=>{
    const id = req.params.id;
    try{
        await Order.findByIdAndDelete(id);
        res.status(200).json("Deleted")
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/find/:userId", verifyTokenAuthorization, async(req, res)=>{
    const id = req.params.userId;
    try{
        const orders = await Order.find({userId:id});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err)
    }
})
router.get('/',verifyTokenAndAdmin, async(req, res)=>{
    try{
        const orders = await Order.find({});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/count',verifyTokenAndAdmin, async(req, res)=>{
    try{
        const orders = await Order.find({}).lean().count();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/income', verifyTokenAndAdmin, async(req, res)=>{
    const date = new Date();
    const tempDate = date.setMonth(date.getMonth()-1)
    const lastMonth = new Date(tempDate);
    const tempDate2 = lastMonth.setMonth(lastMonth.getMonth()-1)
    // const previousMonth = new Date(new Date.setMonth(lastMonth.getMonth()-1));
    const previousMonth = new Date(tempDate2);

    try{
        const income = await Order.aggregate([
            {$match:{createdAt:{$gte:previousMonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount"
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                }
            }
        ])
        res.status(200).json(income);
    }catch(err){
        console.log("error occured");
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;