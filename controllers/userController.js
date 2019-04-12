var User = require('../models/user');

exports.userGetList = function(req, res) {
    User.find({}, (err, users) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if(!users) return res.status(404).send({message: `No existen usuarios`});

        res.status(200).send({users});
    })
};

exports.userGet = function(req, res){
    userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!user) return res.status(404).send({message: `El user no existe`});

        res.status(200).send({user: user});
    });
}

exports.userFind = function(req, res){
    let element = req.params.element.toString();
    let string = req.params.string;
    
    console.log(element + string);

    var filter = new Object;
    filter[element] = string;

    console.log(filter);
    User.find(filter, { password: 0 },(err, users) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if(!users) return res.status(404).send({message: `No existen entradas`});
        
        res.status(200).send({users});
    });
};

exports.userAuthenticate = function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    
    User.findOne({'username': username}, (err, user) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!user) return res.status(404).send({message: `No existen entradas`});

        var userLogged = {
            username: user.username,
        }

        if(username != '' && password != '' && password == user.password){
            res.status(200).send({userLogged});
        } else {
            res.status(401).send({message: 'Fallo de autenticación'})
        }
    });
}

exports.userCreate = function(req, res) {
    console.log('POST api/user');
    console.log(req.body);
    
    var data = req.body;

    let user = new User();
    user.username = data.username;
    user.password = data.password;
    user.coredex = data.coredex;
    user.money = data.money;
    user.bag = data.bag;
    user.team = data.team;


    console.log(user);
    
    user.save((err, userStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en la base de datos: ${err} `});

        res.status(200).send({user: userStored});
    });
}
/*
exports.userUpdate = function(req, res) {
    let userId = req.params.userId;
    let update = req.body;

    console.log(update);

    User.findByIdAndUpdate(userId, update, (err, userUpdated) =>{
        if (err) return res.status(500).send({message: `Error al actualizar el usuario: ${err}`});

        res.status(200).send({user: userUpdated});
    });
}
*/

exports.userUpdate = function(req, res) {
    let update = req.body;

    let element = req.params.element.toString();
    let string = req.params.string;

    console.log(element + string);

    var filter = new Object;
    filter[element] = string;


    console.log(update);

    User.findOneAndUpdate(filter, update, (err, userUpdated) =>{
        if (err) return res.status(500).send({message: `Error al actualizar el usuario: ${err}`});

        res.status(200).send({user: userUpdated});
    });
}


exports.userDelete = function(req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) res.status(500).send({message: `Error al borrar usuario: ${err}`});

        user.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar usuario: ${err}`});
            res.status(200).send({message: `El usuario ha sido eliminado`})
        });
    });
}