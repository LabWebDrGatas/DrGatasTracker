const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');
const httpError = require('../models/errorModel');

const createAdmin = async (req, res, next) => {
    const admin = new Admin(req.body);
    let existingAdmin;
    
    try {
        existingAdmin = await Admin.findOne({email: admin.email});
    } catch(err) {
        return next(
            new httpError('Error al recuperar admin', 422, err)
          );
    }
    if(existingAdmin){
        return next(
            new httpError('Admin con ese email ya fue registrado previamente', 422, 'Duplicate email')
          );
    }

    admin.password = bcrypt.hashSync(admin.password,12);
    
    try {
        await admin.save();
    } catch(err) {
        return next(
            new httpError('No fue posible crear al admin', 500, err)
          );
    }

    res.json({emailAdmin: admin.email, 
            creado: "Creado con éxito"});
}

const getAdmin = function(req, res) {
    Admin.findOne({email: req.body.email}, '-password').then(function(admin) {
        if(!admin){
            return res.status(404).send({error: 'Admin not found'});
        }
        return res.send(admin);
    }).catch(function(error){
        res.status(505).send({Error: error});
    });
}

const deleteAdmin = async (req, res, next) =>{
    const email = req.body.email;
    let admin;

    try {
        admin = await Admin.findOneAndDelete({email: email});
    } catch (err){
        return next(
            new httpError('No fue posible borrar al admin', 500, err)
          );
    }

    if(!admin){
        return next(
            new httpError(`Admin con email ${email} no existe`, 404)
          );
    }

    res
        .status(200)
        .json({email: email,
        estado: "Eliminado con éxito"
    });
}

const loginAdmin = async (req, res, next) => {
    const {email, password} = req.body;

    let userExists;
    try{
        userExists = await Admin.findOne({email: email});
    } catch (err){
        return next (new httpError('Error fething user', 500));
    }

    if(!userExists) {
        return next (new httpError('Email or password incorrect!', 403));
    }

    let passwordValid;
    try {
        passwordValid = await bcrypt.compare(password, userExists.password);
    } catch (err){
        return next (new httpError('Error fething user', 500));
    }

    if(!passwordValid){
        return next (new httpError('Email or password incorrect!', 403));
    }

    let token;
    try{
        token = jwt.sign(
            {adminId: userExists.id, email: userExists.email},
            'secret',
            {expiresIn: '3h'}
        );
    } catch(err) {
        return next(new httpError('Login failed, try again later.', 500));
    }

    res.json({
        adminId: userExists.id,
        email: userExists.email,
        token: token
    });

}


module.exports = {
    createAdmin: createAdmin,
    getAdmin: getAdmin,
    deleteAdmin: deleteAdmin,
    loginAdmin: loginAdmin
}