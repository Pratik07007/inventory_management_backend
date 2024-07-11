const express = require("express");

const userRegistration = require("./controllers/userRegistration");
const {
  zodRegistrationValidation,
} = require("./middlewares/zodValidiationMiddleware");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/api/auth/register", zodRegistrationValidation, userRegistration);

app.listen(PORT, () => console.log(`SERVER RUNNING AT PORT ${PORT}`));
