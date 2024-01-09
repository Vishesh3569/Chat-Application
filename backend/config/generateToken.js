const jwt= require("jsonwebtoken");
const dotenv= require("dotenv");
dotenv.config() ;


// const generateToken = (id) =>{
//    return jwt.sign({id}," " + process.env.JWT_SECRET,{
//     expiresIn:"25d",
//    });
// }


const generateToken = (id) => {
   
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// const generateToken = (email:string): string => {
//     const token = jwt.sign({ email: email }, jwtKey)
//     return token
// }

module.exports = generateToken;