const router = require("express").Router();
const controller = require("./user.contorller")

router.get("/", secureAPI, async(req, res, next)=>{
    try {
        const result = await controller.list();
        res.json({data: result, msg:"success"});
    } catch (error) {
        next(error);
    }
});

module.exports = router;
