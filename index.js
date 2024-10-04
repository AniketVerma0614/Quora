//index.js

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("views engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


let posts = [
		{
				username : "apnacollege",
				content : "I love Coding!"
		},
		
		{
				username : "SharadhaKhapra",
				content : "HardWork is Important to achieve success !!!"
		},
		
		{
				username : "rahulKumar",
				content : "I got selected for my first Internship !!!"
		},
];

//Now there is an need to create an 
//API ==>Lets see how we can do it Anyways !!!

app.get("/posts",(req,res)=>{
		res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
        res.render("new.ejs");
});




app.get("/",(req,res) =>{
	res.send("server working well !!!");
});

//To handle the POST request ....
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    res.send("post request working");
});

app.listen(port, ()=>{
		console.log("lsitening to port : 8080");
});
