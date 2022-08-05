var app = require('express')({});
var express = require('express');


app.use(express.static('app'));
app.get("/", (req,res) =>{
    res.sendFile('index.html', {'root' : __dirname});
})




app.listen(3000);