var express = require("express");
var app = express();

app.use(express.static(__dirname+'/pages'));

app.get('/',function(rer,res){
    res.sendFile(path.join(__dirname+"/pages/index.html"));
});

app.listen(8080,function(){
    console.log("Running on port 8080");
})