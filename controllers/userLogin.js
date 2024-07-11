const { EMPLOYEE } = require("../database/connection");
const jwt = require("jsonwebtoken");

const userLogin = (req, res) => {
  const { email, password } = req.body;
  EMPLOYEE.findOne({ email, password }).then((resp) => {
    if (resp) {
      try {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.json({ succes: true, token });
      } catch {
        return res.json({ succes: false, msg: "Something went wrong" });
      }
    } else {
      res.status(400).json({ succes: false, msg: "Invalid Credentials" });
    }
  });
};

module.exports = userLogin;
