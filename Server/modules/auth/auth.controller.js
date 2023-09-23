const usermodel = require("../users/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(password, saltRounds);
  const user = await usermodel.create(rest);
  const authPayload = { email: "user?.email", token: "" };
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

const verfiyEmail = async (email, token) => {};

module.exports = { create, Login };
