const { EMPLOYEE } = require("../database/connection");

const userRegistration = (req, res) => {
  const { name, phone, email, gender, imagePath, password } = req.body;
  EMPLOYEE.findOne({ $or: [{ email }, { phone }] }).then((resp) => {
    if (resp) {
      return res
        .status(400)
        .json({ msg: "Employee with same credentials already exists" });
    }
    EMPLOYEE.create({
      name,
      phone,
      email,
      gender,
      imagePath,
      password,
    }).then((resp) => {
      res.json({
        success: true,
        msg: `Employee registered Succesfully with email:${email} please wait for approval from the admin`,
      });
    });
  });
};

module.exports = userRegistration;
