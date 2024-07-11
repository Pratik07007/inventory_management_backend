const express = require("express");
const cors = require("cors");

const userRegistration = require("./controllers/userRegistration");

const {
  zodRegistrationValidation,
  zodLoginValidation,
} = require("./middlewares/zodValidiationMiddleware");
const userLogin = require("./controllers/userLogin");

const corsOptions = {
  credentials: true,
  origin: true, // Allow requests from any origin
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/api/auth/register", zodRegistrationValidation, userRegistration);

app.post("/api/auth/login", zodLoginValidation, userLogin);

app.listen(PORT, () => console.log(`SERVER RUNNING AT PORT ${PORT}`));
