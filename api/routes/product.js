const router = require('express').Router();
const Product = require('../models/Product');
const {verifyTokenAndAdmin, verifyTokenAuthorization} = require('../routes/verifyToken')

router.post('/add', verifyTokenAndAdmin, async(req, res)=>{
    const { title, desc, img, categories, size, color, price, inStock } = req.body;
    const newProduct = new Product({
        title,
        desc,
        img,
        categories,
        size,
        color,
        price,
        inStock
    })
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})
router.delete("/delete/:id", verifyTokenAndAdmin, async(req, res)=>{
    const id = req.params.id;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json("Deleted");
    }catch(err){
        res.status(500).json(err);
    }
})
router.get('/find/:id', async(req, res)=>{
    const id = req.params.id;
    try{
        const products = await Product.findById(id);
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get('/find', async(req, res)=>{
    const qNew = req.params.new;
    const qCategory = req.query.category;

    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(5);
            res.status(200).json(products);
        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in : [qCategory]
                }
            })
        }else{
            products = await Product.find({});
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;