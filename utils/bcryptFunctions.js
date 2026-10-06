import bcrypt from "bcrypt";


// Gets a password and returns its hash from:
export async function hashPassword(password){
   
    console.log(password);
    console.log(typeof password);
    
    
    const saltRounds = 8;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    
    console.log(hashedPassword);
    
    return hashedPassword;
};


// The function gets a plain password and an hash password and returns boolean meaning true/false if the hash form came from the given password: 
export async function comparePassword(password, hashedPassword){
    const areTheyCompare = await bcrypt.compare(hashedPassword, password);
    return areTheyCompare;

};