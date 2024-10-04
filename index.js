//index.js
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "apnacollege",
        content: "I love coding",
    },
    {
        username: "Aniket",
        content: "It's never too late until you have decided!!!",
    },
    {
        username: "Rahul Kumar",
        content: "I got selected for my 1st internship!!!",
    },
];

// Route to render the 'index' page
app.get("/posts", (req, res) => {
    res.render("index", { posts }); // Pass the 'posts' variable to the view
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
