const express = require("express");
const app = express();
const path = require('path');

app.use("/static", express.static(path.join(__dirname, 'static')));
app.set("view engine", "ejs");
app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(8080, ()=>{
    console.log("Rodando");
});