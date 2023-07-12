let jwt = require('jsonwebtoken');
let secret = 'gew67dfgew'; //secret key
//generate keys
function generateToken(user){
    let payload ={
        email: user.email,
        password: user.password
    }
   return jwt.sign(payload, secret);
}

//checking whether the token provided by user is correct one
function checkToken (token) {
    return jwt.verify(token, secret);
}

module.exports = {generateToken, checkToken};