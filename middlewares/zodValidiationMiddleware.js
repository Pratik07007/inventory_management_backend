const zod = require("zod");

const zodRegistrationValidation = (req, res, next) => {
  const schema = zod.object({
    name: zod.string().min(1, "Name cannot be empty"),
    email: zod.string().min(1, "Email cannot be empty").email(),
    password: zod
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A - Z]/, "Password must contain a upper case alphabet")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "password must contain at least one special character"
      )
      .regex(/[0-9]/, "Password must contain at least on number"),
    phone: zod.number({ message: "Invalid phone number" }),
    gender: zod.string().optional(),
    imagePath: zod.string().optional(),
  });

  try {
    const data = schema.safeParse(req.body);
    if (data.success) {
      return next();
    }
    return res.json(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { zodRegistrationValidation };
