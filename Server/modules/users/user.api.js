const router = require("express").Router();
const Controller = require("./user.contorller");

router.post("/", async (req, res, next) => {
  try {
    const result = await Controller.create(req.body);
    res.json({ data: result, message: "success" });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Username or Password is missing");
    const result = await Controller.Login(email, password);
    res.json({ data: result, message: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
