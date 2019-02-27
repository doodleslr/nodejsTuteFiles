const express = require('express');
const route = express.Router();

route.use((req,res,next)=>{
    console.log('people middleware being used.')
    next();
});

route.get('/',(req,res)=>{
    res.send('/ being hit');
});

route.get('/example',(req,res)=>{
    res.send('/thing being hit');
});

module.exports = route;