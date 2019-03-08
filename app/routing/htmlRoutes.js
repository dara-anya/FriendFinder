var express = require("express");
module.exports = function(server){
    // Route to home.html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    });

    // Route to survey.html
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });
}

