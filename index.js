const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app =  express()


app.use(express.json());




app.get('/',(req,res)=>{
    res.send("Hello from Node API Server Updated");
});

app.get('/api/products',async(req,res)=>{

    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


app.get('/api/product/:id',async(req, res)=>{
    try{
        const{id}=req.params;
        const product= await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message:error.message});
    }
});
app.post('/api/products', async(req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

app.put('/api/product/:id',async(req, res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

app.delete('/api/product/:id',async(req, res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found" });
        }
        res.status(200).json({message: "Product deleted" });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://MonicaSN606:Harrypotter%4006@clustersn.riraxjl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ClusterSN")
.then(()=>{
    console.log("Connected to Database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
})
.catch(() =>{
    console.log("Connection Failed");
});


//update a product
