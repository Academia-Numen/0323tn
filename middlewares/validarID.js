const {Ecomers} = require('../models/ecomers')


const validarID = async (req, res, next ) =>{
    try {
        const busqueda = await Ecomers.findById(req.params.id)
        if (busqueda !== null) {
            next()
        } else {
            res.status(400).json({
                msg: "el id ingresado " + req.params.id + " es invalido"
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
} 

module.exports = {validarID}