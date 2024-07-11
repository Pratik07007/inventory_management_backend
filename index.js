const express = require("express");

const userRegistration = require("./controllers/userRegistration");

const {
  zodRegistrationValidation,
  zodLoginValidation,
} = require("./middlewares/zodValidiationMiddleware");
const userLogin = require("./controllers/userLogin");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/api/auth/register", zodRegistrationValidation, userRegistration);

app.post("/api/auth/login",zodLoginValidation, userLogin)

app.listen(PORT, () => console.log(`SERVER RUNNING AT PORT ${PORT}`));
