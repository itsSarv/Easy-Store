const {verifyJWT} = require("../../utils/jwt")


const secureAPI = (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token) throw new Error("Access Token is required");
    const accessToken = token.split("Bearer ")[1];
    //check if the accesstoken is valid is not
    const isValid = verifyJWT(accessToken);
    //User exist check
    //User role check
    next();
}

module.exports = secureAPI;