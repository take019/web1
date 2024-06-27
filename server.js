var express = require("express");
var bodyParser = require("body-parser");

server = express();

server.use(express.static(__dirname));//web root
//server.use(express.static("md110"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var ContactDB = DB.create("contact.db");
var CartDB = DB.create("Cart.db");
var productDB = DB.create("product.db");
// productDB.insert([
//     { href: "#product1", imgSrc: "p.png", title: "商品名稱1", subtitle: "$20000" },
//     { href: "#product2", imgSrc: "p.png", title: "商品名稱2", subtitle: "$20000" },
//     { href: "#product3", imgSrc: "p.png", title: "商品名稱3", subtitle: "$20000" },
//     { href: "#product4", imgSrc: "p.png", title: "商品名稱4", subtitle: "$20000" },
//     { href: "#product5", imgSrc: "p.png", title: "商品名稱5", subtitle: "$20000" },
//     { href: "#product6", imgSrc: "p.png", title: "商品名稱6", subtitle: "$20000" },
//     { href: "#product7", imgSrc: "p.png", title: "商品名稱7", subtitle: "$20000" },
//     { href: "#product8", imgSrc: "p.png", title: "商品名稱8", subtitle: "$20000" },
//     { href: "#product9", imgSrc: "p.png", title: "商品名稱9", subtitle: "$20000" }
    
// ])

server.get("/product", function(req, res){
    
    productDB.find({}).then(results => {
        if(results !=null){
            res.send(results);
        }else{
            res.send("Error!")
        }
    }) 
    
})



server.get("/contact", function(req, res){
    //res.send("");
    res.redirect("/index.html");
});
 
server.post("/contact", function(req, res){
    console.log(req.body);
    ContactDB.insert(req.body);
    res.send();
    //res.redirect("/index.html");
})


server.listen(8000, function(){
    console.log("Server is running at port 8000!")
})