const express = require("express");
const bodyparser=require("body-parser");

const app=express();
app.set('view engine', 'ejs');


app.get("/",function(req,res)
{
    var today=new Date();
    var day="";
    var listdays=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
   

    res.render("list",{kindOfDay:listdays[today.getDay()]});
    
})


app.listen(3000,function()
{
    console.log("server is up and running on port 3000.");
})