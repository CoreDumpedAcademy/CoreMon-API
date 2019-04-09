var Mon = require('../models/mon');

exports.monGetList = function(req, res){
    Mon.find({}, (err, mons) =>{
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if(!mons) return res.status(404).send({message: `No existen entradas`});
        
        res.status(200).send({mons});
    });
}

exports.monGet = function(req, res){
    monId = req.params.monId;

    Mon.findById(monId, (err, mon) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!mon) return res.status(404).send({message: `El mon no existe`});

        res.status(200).send({mon: mon});
    });
}

exports.monCreate = function(req, res) {
    console.log('POST api/mon');
    console.log(req.body);

    let mon = new Mon();
    mon.name = req.body.name;
    mon.number = req.body.number;

    mon.save((err, monStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en la base de datos: ${err} `});

        res.status(200).send({mon: monStored});
    });
}

exports.monUpdate = function(req, res) {
    let monId = req.params.monId;
    let update = req.body;

    Mon.findByIdAndUpdate(monId, update, (err, monUpdated) =>{
        if (err) return res.status(500).send({message: `Error al actualizar el mon: ${err}`});

        res.status(200).send({mon: monUpdated});
    });
}

exports.monDelete = function(req, res) {
    let monId = req.params.monId;

    Mon.findById(monId, (err, mon) => {
        if (err) res.status(500).send({message: `Error al borrar mon: ${err}`});

        mon.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar mon: ${err}`});
            res.status(200).send({message: `El mon ha sido eliminado`})
        });
    });
}

