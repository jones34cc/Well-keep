const express = require("express");
const bodyparser=require("body-parser");

var arr=["Brush","Bath","Breakfast"];

const app=express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res)
{
    var today=new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
    const detailedDate = today.toLocaleDateString('en-US', options);
   

    res.render("list",{kindOfDay:detailedDate,variable:arr});
    
})

app.post("/",function(req,res)
{
    var item=req.body.inputField;
    arr.push(item);
    res.redirect("/");
})


app.listen(3000,function()
{
    console.log("server is up and running on port 3000.");
})