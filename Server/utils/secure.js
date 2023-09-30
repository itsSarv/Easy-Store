const {verifyJWT} = require("./jwt")

const compareRoles = (requireRoles, userRoles)=>{
    console.log(requireRoles, userRoles);
    if(requiredRoles.length === 0) return true;
    //check and compare the role
};

const secureAPI = (roles) =>{
    return (req, res, next)=>{
        const token = req.headers.authorization;
        if(!token) throw new Error("Access Token is required");
        const accessToken = token.split("Bearer ")[1];
        //check if the accesstoken is valid is not
        const {data} = verifyJWT(accessToken);
        const{email, roles: userRoles} = data;

        //User exist check

        //User role check
        const isAllowed = compareRoles(roles ?? [], userRoles);
        console.log({isAllowed});
        next();
}
};


module.exports = secureAPI;