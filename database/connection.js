const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const employeeSchema = mongoose.Schema({
  name: String,
  phone: Number, //make sure to parseInt while sending request to the server
  gender: String,
  imagePath: String,
  email: String,
  password: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const EMPLOYEE = mongoose.model("EMPLOYEE", employeeSchema);

module.exports = { EMPLOYEE };
