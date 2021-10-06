const Admin = require('../models/admin');

const createAdmin = function(req, res) {
    const admin = new Admin(req.body);
    admin.save().then(function (){
        return res.send(admin);
    }).catch(function(error){
        console.log(error);
        return res.status(400).send({Error: error});
    });
}

const getAdmin = function(req, res) {
    Admin.findOne({email: req.params.email}).then(function(admin) {
        if(!admin){
            return res.status(404).send({error: 'Admin not found'});
        }
        return res.send(admin);
    }).catch(function(error){
        res.status(505).send({Error: error});
    });
}

module.exports = {
    createAdmin: createAdmin,
    getAdmin: getAdmin
}