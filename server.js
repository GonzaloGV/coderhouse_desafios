"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.end("server corriendo");
});
app.listen(port, function () {
    console.log("Listening on port: " + port);
});