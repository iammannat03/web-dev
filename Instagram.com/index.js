const express = require("express");
const methodOverride = require ("method-override");
const path = require("path");
const {v4:uuidv4}= require("uuid");
let data=require("./data");
let users=data;

const app = express();

let port = 8080;
let user={};

//views directory [stores all the dynamic '.ejs' files]
app.set("views",path.join(__dirname, "/views"));
app.set("view engine","ejs");

//public directory [stores all the static '.html' and '.css' files]
app.use(express.static(path.join(__dirname,"/public")));

//to convert urlencoded to readable format
app.use(express.urlencoded({extended: true}));

// to use method-override: use PATCH and DELETE requests
app.use(methodOverride("_method"));

//get: login page [page 1]
app.get("/", (req,res)=>{
    res.render("login_page");
})

app.post("user-profile",(req,res)=>{
    let {username,password}=req.body;
    // user = users.find((u)=>username==u.username);
    // if(user.password==password){
    //     console.log("user found");
    // }
    // else{
    //     console.log("not found");
    // }
    res.send(username);
})

app.get("/:id/user-profile",(req,res)=>{
    let {id}=req.params;
    user = users.find((u)=>id==u.id);
    res.send(`Hompage \n User Info: ${user.username}`);
})

//listen
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})