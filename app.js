const express = require("express");
const bodyparser=require("body-parser");

let arr=[];

const app=express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res)
{
    let today=new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
    const detailedDate = today.toLocaleDateString('en-US', options);
   

    res.render("list",{kindOfDay:detailedDate,tasks:arr});
    
})

app.post("/",function(req,res)
{
    let item=req.body.inputField;
    arr.push(item);
    res.redirect("/");
})


app.listen(3000,function()
{
    console.log("server is up and running on port 3000.");
})