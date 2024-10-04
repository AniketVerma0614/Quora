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
]

//Now there is an need to create an 
//API ==>Lets see how we can do it Anyways !!!

app.get("/posts",(res,req)=>{
		req.render("index.ejs",{posts});
});




app.get("/",(req,res) =>{
	res.send("server working well !!!");
});

app.listen(port, ()=>{
		console.log("lsitening to port : 8080");
});
