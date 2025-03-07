// const express = require("express");
// const app = express();
// const multer = require("multer");
// // console.log(__dirname)
// const fs = require("fs");
// const path = require("path");

// // fs.mkdir("./hellos", () => {
// //     console.log("Directory created");
// // })

// // const newpath = path.join ("main","sub","sub-sub");
// // const newpath = path.join(__dirname, "media");
// // console.log(newpath);

// // if (!fs.existsSync(newpath)) {
//   // check if path exists or not
//   fs.mkdir(newpath, () => {
//     // if path is does not exist then create a new directory as per the path
//     console.log("Directory created");
//   });

// // const newpath= path.join(__dirname,"newfolder");
// // console.log(newpath);
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, newpath);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
// app.post("/data", upload.single("profile"), (req, res) => {
// //   res.send("File uploaded successfully");
//     console.log(req.file);
//     console.log(req.body);
//     res.send("File uploaded successfully");
// });
// app.listen(2000, () => {
//   console.log("Server is running on port 7000");
// });


const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { console } = require("inspector");

console.log(__dirname);
