const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateJWT = (payload) =>{
    return jwt.sign(
        {
        data: payload
      }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURATION });
}

const verifyJWT = (token)=>{
  
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch(err) {
    throw new Error("Token is Invalid");
  }
}


module.exports = {generateJWT, verifyJWT};