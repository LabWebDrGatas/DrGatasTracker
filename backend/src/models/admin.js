const mongoose = require('mongoose');
const validation = require('validator');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!validation.isEmail(value)) {
              throw new Error('Email invalido')
            }
          }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate(value){
          if(!validation.isLength(value, 8, 50)) {
            throw new Error('Contraseña menor a ocho caracteres')
          }
        }
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;