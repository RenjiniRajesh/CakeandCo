const jwt = require('jsonwebtoken');
const AuthMiddleware = async(req,res,next)=>{

    // using postman
    // const header = req.header('Authorization');
    // if(!header){
    //     return res.status(400).json({msg:"Please Login to Continue"})
    // }
    // try{
    //     const token=header.split(" ")[1];
    //     const decodedToken = jwt.verify(token,process.env.SECRET_KEY);
    //     next()
    // }
    // catch(error){
    //     return res.status(401).json({msg:"Invalid Token"})
    // }


    
    // using browser cookies

try{

    const token=req.cookies.token
    if(!token){
        return res.status(401).json({msg:"Not Authenticated"})
    }
    const decodetoken=jwt.verify(token,process.env.SECRET_KEY)
    req.user=decodetoken
    next()
}catch(error){
    return res.status(401).json({msg:"Invalid token"})
}
}

module.exports = AuthMiddleware