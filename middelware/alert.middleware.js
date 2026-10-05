import alertSchema from "../validation/alerts.vaildation.js";

export function alertChecking(req, res, next){
    console.log("alertChecking");
    

    const data = alertSchema.safeParse(req.body);
    console.log(data);
    

    if (!data.success){
        res.status(400).json({
            error: "Bad request: ( invalid body )"
        });
    };

    // Meaning it is ok you can pass on to the next stage:
    next();
};