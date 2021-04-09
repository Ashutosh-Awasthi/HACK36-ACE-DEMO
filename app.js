var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));

//#routes.........
app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/:id/dashboard",(req,res)=>{
    res.render("dashboard");
})

app.listen(port,()=>{
    console.log(`app is running, visit: http://www.localhost:${port}`);
});