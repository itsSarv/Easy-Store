const { model, Schema } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");
const validateEmail = require("./user.validation");

const userSchema = new Schema({
  name: { type: String, required: "Full name is required" },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  isEmailVerified: { type: Boolean, default: false },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isActive: { type: Boolean, default: true, required: true },
  ...commonSchema,
});

module.exports = model("User", userSchema);
