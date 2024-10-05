//index.js

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

// uuidv4(); 
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'



app.use(express.urlencoded({extended: true}));

app.set("views engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


let posts = [
		{       id : uuidv4(),
				username : "apnacollege",
				content : "I love Coding!"
		},
		
		{       
                id : uuidv4(),
				username : "SharadhaKhapra",
				content : "HardWork is Important to achieve success !!!"
		},
		
		{       id : uuidv4(),
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
    let id= uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

//To Retieve - id with a Specfic Posts ...
app.get("/posts/:id",(req,res)=>{
   let {id} =req.params;
   let post = posts.find((p)=> id ===p.id);

//    console.log(post);

   res.render("show.ejs",{post});
});




app.listen(port, ()=>{
		console.log("lsitening to port : 8080");
});