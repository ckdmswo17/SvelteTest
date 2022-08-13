const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// const publicPath = path.join(__dirname, ".");

// app.use(express.static(publicPath));

app.get("/",function(req, res) {
    res.send("Hello")
})

app.post("/users",function(req,res){
    if ("cha6217"==req.body.id){
        if ("1234" == req.body.password){
            res.send("차은재님 안녕하세요!")
        }
    }
})

app.listen(3000, () => {
    console.log("Server is online on port 3000")
});