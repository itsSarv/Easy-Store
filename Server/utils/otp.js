const { totp } = require("otplib");

const generateOTP = () => {
  return totp.generate(process.env.OTP_SECRET);
};

const verifyOTP = () => {
  return totp.check(token, process.env.OTP_SECRET);
};

module.exports = { generateOTP, verifyOTP };
