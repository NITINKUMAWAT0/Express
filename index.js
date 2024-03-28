const express = require('express');
const fs = require('fs')
const port = 9000;
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products = data.products;

const server = express();

server.get('/',(req,res)=>{
    // res.json(products)
    res.sendStatus(404);
})

server.listen(port,()=>{
    console.log(`the app is running on port number:${port}`);
})