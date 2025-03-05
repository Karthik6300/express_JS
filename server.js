const express = require("express");
const app = express();
app.use(express.json());

const UsernameValidation = (req, res, next) => {
  let inputName = req.body.usernamee;
  var usernameRegex = /^[a-zA-z0-9]{3,16}$/;
  if (inputName.length <= 0) {
    res.status(400).send("Username should not be empty");
  } else if (usernameRegex.test(inputName)) {
    next();
  } else {
    res.status(400).send("Username format is invalid");
  }
};

const UserPassword = (req, res, next) => {
  let inputpassword = req.body.passwordd;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (inputpassword.length <= 0) {
    res.status(400).send("password should not be empty");
  } else if (passwordRegex.test(inputpassword)) {
    next();
  } else {
    res.status(400).send("Password format is invalid");
  }
};

const Useremail = (req, res, next) => {
    let inputmail = req.body.email;
    var mailRegex = /^(?!.*\.\.)[a-zA-Z0-9_%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    if (inputmail.length <= 0) {
      res.status(400).send("Email should not be empty");
    } else if (mailRegex.test(inputmail)) {
      next();
    } else {
      res.status(400).send("Email format is invalid");
    }
  };
  
app.post("/signup", UsernameValidation, UserPassword, Useremail,(req, res) => {
  res.send("user registered successfully");
});

app.listen("3100", () => {
  console.log("server is running");
});
