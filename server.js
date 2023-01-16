const express = require('express');

const app = express(); // request handler

app.use((req,res,next) => {
    console.log("First middleware");
    next();
})
app.use((req,res,next) => {
    console.log("Second middleware");
    res.send('<h1>Hello from Express!.</h1>');
    //res.send( { key1: "value" })
})

app.listen(3000);