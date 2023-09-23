const router = require("express").Router();
const userRouter = require("../modules/users/user.route");
const authRouter = require("../modules/auth/auth.route");

router.get("/", (req, res, next) => {
  res.json({ data: "", msg: "API Routes are Working" });
});

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.all("*", (req, res, next) => {
  try {
    res.json({ data: "", msg: "Routes are not defined" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
