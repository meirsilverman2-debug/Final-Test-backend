import { createUser, getAllUsers, getUserById, updateUserById, deleteUserByID } from "../DAL/user.dal.js";



// POST Ctrl:
export async function createUserCtrl(user) {
    const response = await createUser(user);
    return response;
};



// GET (all users) Ctrl:
export async function getAllUsersCtrl() {
    const response = await getAllUsers();
    return response;
};



// GET (by ID) Ctrl:
export async function getUserByIdCtrl(userId){
    const response = await getUserById(userId);
    return response;
};



// PUT (by ID) Ctrl:
export async function updateUserByIdCtrl(userID, updateUser){
    const response = await updateUserById(userID, updateUser);
    return response;
};



// DELETE (by ID) Ctrl:
export async function deleteUserByIdCtrl(userId){
    const response = await deleteUserByID(userId);
    return response;
};