const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");

console.log(__dirname);


app.listen(3000, () => {    
    console.log("Server kar is running");
});