const bcrypt = require('bcryptjs')
const {User} = require('../models/user')
const generadorJWT = require('../utils/generadorJWT')

const userController = {
    pruebaToken (req, res) {
        const token = generadorJWT(req.body)
        res.json({token})
    },
    pasoElToken (req, res) {
        res.json({msg: "paso el token!!!"})
    },


    pruebaSession (req, res) {
        const user = {
            nombre:"juan",
            _id: "wertyuiop12345678"
        }
        res.cookie('cookieDelUsuario',user.nombre,{maxAge: 60000*60*24*90})
        req.session.user = user
        res.json(req.session)
    },
    test (req, res){
        res.json({session:req.session, cookie: req.cookies.cookieDelUsuario})
    },
    cerrarSession (req, res) {
        req.session.destroy()
        res.clearCookie('cookieDelUsuario')
        res.json({
            msg: 'session cerrada'
        })
    },
    hash (req, res) {
        const pass = "1234567890"
        const salt = bcrypt.genSaltSync(15)
        const hash = bcrypt.hashSync(pass,salt)
        const comparacion1 = bcrypt.compareSync(pass,hash)
        const comparacion2 = bcrypt.compareSync("0987654321",hash)
        res.json({hash,comparacion1,comparacion2})
    },
    async register (req, res) {
        const salt = bcrypt.genSaltSync(15)
        const hash = bcrypt.hashSync(req.body.password,salt)
        const newUser = {
            email: req.body.email,
            name: req.body.name,
            password: hash
        }
        const newUserInDB = new User(newUser)
        await newUserInDB.save()
        res.json(newUserInDB)
    },
    async login (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                return res.json({msg: "la contraseña o el email es incorrecto"})
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({msg: "la contraseña o el email es incorrecto"})
            }
            const user = {
                _id: persona._id,
                name: persona.name
            }
            req.session.user=user
            if (req.body.remember) {
                res.cookie('cookieDelUsuario', req.session.user,{maxAge:120000})
            }
            res.json({msg:"usuario logeado"})
        } catch (error) {
            res.json(error)
        }
    },
    logout (req, res) {
        req.session.destroy()
        res.clearCookie('cookieDelUsuario')
        res.json({
            msg: "session cerrada"
        })
    },
    async loginToken (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                return res.json({msg: "la contraseña o el email es incorrecto"})
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({msg: "la contraseña o el email es incorrecto"})
            }
            const token = generadorJWT({id: persona._id, email: persona.email})
            res.json({token})
            
        } catch (error) {
            res.json(error)
        }
    },
}

module.exports = userController