const nodemailer = require("nodemailer");

const useSendRegistrationEmail = async (sentTo) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const transport = await transporter.sendMail({
    from: '"no-reply" <noreply@gmial.com>', // sender address
    to: sentTo,
    subject: "Thank You For Registration",
    html: `
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Confirmation</title>
  <style>
    /* Reset default styles */
    body, h3, p {
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
    
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    h3 {
      color: #007bff;
      margin-bottom: 10px;
    }
    
    p {
      color: #333;
      line-height: 1.6;
    }
    
    .contact-info {
      margin-top: 20px;
    }
    
    .contact-info p {
      margin: 5px 0;
    }
    
    .contact-info strong {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h3>Thank You for Registering!</h3>
    <p>The admin group will look forward to verifying your registration soon.</p>
    <p>Please feel free to contact us at <a href="mailto:s.dhimal006@gmail.com">s.dhimal006@gmail.com</a> or call us at <strong>9807373150</strong> in case of any questions or issues.</p>
    <p>Best regards,</p>
    <p>The Admin Team</p>
    
    <div class="contact-info">
      <p><strong>Email:</strong> <a href="mailto:s.dhimal006@gmail.com">s.dhimal006@gmail.com</a></p>
      <p><strong>Phone:</strong> 9807373150</p>
    </div>
  </div>
</body>
</html>
`,
  });
};

module.exports = useSendRegistrationEmail;
