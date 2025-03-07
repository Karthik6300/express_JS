const bcrypt = require("bcrypt");
const fs = require("fs");
let password = "INDIAISMYCOUNTRY";

// bcrypt.hash(password, 5, (err, hash) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(hash);
//   else
//     fs.writeFile("hash.txt", hash, (err) => {
//       if (err) {
//         console.log(err);
//       } else console.log("Hashed password stored successfully");
//     });
// });
fs.readFile("hash.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let storedHash = data;
    bcrypt.compare(password, storedHash, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
});
