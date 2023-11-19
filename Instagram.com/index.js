const express = require("express");
const path = require("path");
const app = express();

let port = 8080;



//views directory [stores all the dynamic '.ejs' files]
app.set("views",path.join(__dirname, "/views"));
app.set("view engine","ejs");

//public directory [stores all the static '.html' and '.css' files]
app.use(express.static(path.join(__dirname,"/public")));

//to convert urlencoded to readable format
app.use(express.urlencoded({extended: true}));

//get: login page [page 1]
app.get("/", (req,res)=>{
    res.render("login_page");
})

//listen
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})