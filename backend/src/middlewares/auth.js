const jwt= require('jsonwebtoken');
require('dotenv').config();

//Middleware que protege rutas
const verificarToken=(req,res,next)=>{
    //obtner token del header
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json(
            {mensaje:'Acceso denegado'});
    }

    try{
        //Verificar token
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        //guardamos info del usuario
        req.user=decoded;
        next();
    }catch(error){
        return res.status(400).json(
            {mensaje:'Token invalido'});
    }
};
module.exports = verificarToken;