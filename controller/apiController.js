const {Ecomers} = require('../models/ecomers')

const apiController = {
    async apiList(req, res){
        const list = await Ecomers.find()
        res.json(list)
    },
    async apiFindId(req, res){
        const list = await Ecomers.findById(req.params.id)
        res.json(list)
    },
    async apiFindOne(req, res){
        const list = await Ecomers.findOne(req.query)
        res.json(list)
    },
    async apiSearch(req, res){
        const list = await Ecomers.find(req.query)
        res.json(list)
    },
    async apiCrearProducto (req, res){ 
        const nuevoProducto = new Ecomers(req.body)
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    },
    async apiPut(req, res){
        await Ecomers.findByIdAndUpdate(req.params.id, req.body)
        const resultado = await Ecomers.findById(req.params.id)
        res.status(201).json(resultado)
    },
    async apiDelete(req, res){
        await Ecomers.findByIdAndDelete(req.params.id)
        res.status(204).json()
    }
    /*
    - modelos de origen
    - modelos paralelos
    */
}

module.exports = apiController

