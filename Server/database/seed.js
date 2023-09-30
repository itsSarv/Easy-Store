require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Controller = require("../modules/users/user.contorller");

mongoose.connect(process.env.DB_URL);

const setup = {
  initialize: async () => {
    await mongoose.connection.dropDatabase();
    console.log("DB reset");
    console.log("Creating Admin...");
    const payload = {
      name: "Saurav Admin",
      email: "sauravtiwari145@gmail.com",
      password: await bcrypt.hash("12345", +process.env.SALT_ROUND),
      isEmailVerified: true,
      roles: ["admin"],
    //   isArchived: false,
    };
    await Controller.create(payload);
    console.log("Creating User...");
    const userPayload = {
      name: "saurav User",
      email: "saurav@gmail.com",
      password: await bcrypt.hash("12345", +process.env.SALT_ROUND),
      isEmailVerified: true,
    //   isArchived: false,
    };
    await Controller.create(userPayload);
    // console.log("User Completed...");

    // console.log("adding multiple Categories...");

    // console.log("Finishing multiple Categories...");

    // console.log("adding Products...");
    // console.log("Finishing Products...");

    // console.log("adding Orders...");
    // console.log("Finishing Orders...");
  },
};
setup.initialize();