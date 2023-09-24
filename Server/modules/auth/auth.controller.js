const usermodel = require("../users/user.model");
const authModel = require("../auth/auth.model");
const bcrypt = require("bcrypt");
const { generateOTP, verifyOTP } = require("../../utils/otp");

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(password, +process.env.SALT_ROUND);
  const user = await usermodel.create(rest);
  await authModel.create({ email: user?.email, token: generateOTP() });
  return user;
};

const Login = async (email, password) => {
  const user = await usermodel.findOne({ email });
  // Email Exist ?
  if (!user.isEmailVerified)
    throw new Error("Email is not verfied. Verify to get started");
  // Is user active?
  if (!user.isActive) throw new Error("User is blocked. Please Contact Admin");
  if (!user) throw new Error("User Not Found....");
  const result = await bcrypt.compare(password, user.password);
  if (!result) throw new Error("Email or Password Mismach");
  return result;
};

const verfiyEmail = async (email, token) => {
  //authModel email check
  const user = await authModel.findOne({ email });
  if (!user) throw new Error("User Not Found....");

  //otp check
  const isValidOTP = await verifyOTP(token);
  if (!isValidOTP) throw new Error("Token expired");

  //authmodel Otp token compare
  const isValid = user?.token == +token;
  if (!isValid) throw new Error("Token Mismatched");

  //usermodel isEmail Verified true
  await userModel.findOneAndUpdate(
    { email },
    { isEmailVerified: true },
    { new: true }
  );
};

module.exports = { create, Login, verfiyEmail };
