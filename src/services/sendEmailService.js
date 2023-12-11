import transporter from "../config/nodemailer.js";

export const sendEmailService = async (data) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: data.email,
    subject: data.title,
    html: data.content
  };

  await transporter.sendMail(mailOptions);
};
