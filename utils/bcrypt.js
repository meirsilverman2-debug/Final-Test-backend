import bcrypt from "bcrypt";


// Gets a password and returns its hash from:
export function hashPassword(password){
    const salt = 8;
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword;
};


// The function gets a plain password and an hash password and returns boolean meaning true/false if the hash form came from the given password: 
export function comparePassword(password, hashedPassword){
    const areTheyCompare = bcrypt.compare(hashedPassword, password);
    return areTheyCompare;

};