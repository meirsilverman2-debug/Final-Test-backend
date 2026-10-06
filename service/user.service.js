import { createUserCtrl, getAllUsersCtrl, getUserByIdCtrl, updateUserByIdCtrl, deleteUserByIdCtrl } from "../controllers/user.controllers.js";
import { hashPassword, comparePassword } from "../utils/bcryptFunctions.js";
import { generateToken } from "../utils/jwtFunctions.js"


// POST Service:
export async function createUsertService(req, res) {
    console.log("Create user");
    
    const user = req.body;

    console.log(user);
    

    console.log(user.password);
    // Here we are changing more likly exchanging the password with the hashed virsion:
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;

    console.log(user.password);
    

    // this is not right it is need to be in the front my bad...........
    // And here we have the amazingly sight of generating a token and keeping it in the local storage fo the browzaer how amazing is this!!!:
    // const token = generateToken(user);
    // localStorage.setItem(token);

    const response = await createUserCtrl(user);

    res.json({
        message: `A User has been created with _id: ${response.insertedId}`
    });
};



// GET (all Userts) Service:
export async function getAllUsertsService(_, res) {
    const response = await getAllUsersCtrl();
    res.status(200).json(response);
};



// GET (one by ID) Service:
export async function getUsertByIdService(req, res) {
    const { id } = req.user.id;

    const response = await getUsertByIdCtrl(id);

    res.status(200).json(response);
};



// PUT Service:
export async function updateUsertByIdService(req, res) {

    const {role} = req.user;
    console.log(role);

    if(role !== "admin"){
        res.status(403).json({
            message: "You do not have the authorizatio to do it we are wery sorry not realy hhaaaa!"
        });
    };
    

    const { id } = req.params;
    const updateUsert = req.body;

    const isUsertExits = await getUsertByIdCtrl(id);

    if (isUsertExits.length === 0) {
        res.status(404).json({
            error: "Not found (This User does not exsit in our system)"
        });
    } else {

        const response = await updateUserByIdCtrl(id, updateUsert);

        res.status(200).json(response)
    }
};



// DELETE Service:
export async function deleteUsertByIDService(req, res) {

     const {role} = req.user;
    console.log(role);

    if(role !== "admin"){
        res.status(403).json({
            message: "You do not have the authorizatio to do it we are wery sorry not realy hhaaaa!"
        });
    };

    const { id } = req.params;

    const isAlertExits = await getUserByIdCtrl(id);

    if (isAlertExits.length === 0) {
        res.status(404).json({
            error: "Not found (this user does not exsit in our system)"
        });
    };

    const response = await deleteUserByIdCtrl(id);

    res.status(202).json({
        message: `The user has been successfull deleted from the system`
    });
};