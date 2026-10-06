import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";



// the function gets a user and returns a generated token for the register user:
export function generateToken(user){

    const payLoad = {
        id: user.id,
        userName: user.userName,
        role: user.rol
    };


    const token = jwt.sign(payLoad, process.env.JWT_SECRET,);
    return token;
};



// The function gets a token and decodes it by using the JWT_SECRET of ours
export  function validateToken(token){
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        // for checking type and too see the value:
        console.log(decodedToken);
        console.log(typeof decodedToken);

        return decodedToken;
    } catch (error) {
        console.log("Invalid or expired token");
    };
};