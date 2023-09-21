const Model = require("./user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(password, saltRounds);
  return Model.create(rest);
};

const Login = async (email, password) => {
  const user = await Model.findOne({ email });
  if (!user) throw new Error("User Not Found....");
  const result = await bcrypt.compare(password, user.password);
  if (!result) throw new Error("Email or Password Mismach");
  return result;
};

module.exports = { create, Login };
