import  userSchema  from "../validation/user.validation.js";


export function userChecking(req, res, next) {
    console.log("userChecking");


    const data = userSchema.safeParse(req.body);
    console.log(data);


    if (!data.success) {
        res.status(400).json({
            error: "Bad request: ( invalid body )"
        });
    };


    next();
};