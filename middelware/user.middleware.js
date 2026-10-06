import  userSchema  from "../validation/user.validation.js";
import {generateToken, validateToken} from "../utils/jwtFunctions.js"



export function userChecking(req, res, next) {
    console.log("userChecking");


    const data = userSchema.safeParse(req.body);
    console.log(data);


    if (!data.success) {
        res.status(400).json({
            error: "Bad request: ( invalid body )"
        });
    };


    next()
};


// The middeleware that checks if we know this client slash user meaning if not we will give him the not know you status code (401):
export function doYouHaveToken(req, res, next){
    const authHeader = req.headers.authrization;
    
    if (!authHeader){
        return res.status(401).json({
            message: "we as a system do not autenticate you. (happy smile haaaa)"
        });
    };

    const token  = authHeader.split(" ")[1]; // To basicly take down some stuff you see we get this from the client "Authorization: bearer(white space!!!) <Token>" and we want only the token because this is what realy important you know:
    
    console.log(token);
    
    const decodedToken = validateToken(token);


    req.user = decodedToken;

    console.log(typeof req.user);
    
    next()// For moving on you know:
};