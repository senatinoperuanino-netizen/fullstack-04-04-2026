const jwt = require('jsonwebtoken');
require('dotenv').config();

//
const generarToken=(user)=>{
    return jwt.sign(
        {
            id:user.id //payload(Datos dentro del token)
        },
        process.env.JWT_SECRET, //Clave Secreta
        {
            expiresIn:'1h' //Duración
        }
    )
}
module.exports = generarToken;