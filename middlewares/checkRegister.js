const {check} = require('express-validator')

const checksRegister = [
    check('nombre')
        .notEmpty().withMessage('El campo nombre es obligatorio')
        .isString().withMessage('El campo nombre debe ser de tipo string'),
    check('email')
        .notEmpty().withMessage('El campo email es obligatorio')
        .isString().withMessage('El campo email debe ser de tipo string')
        .isEmail().withMessage('El campo requiere un mail con los siguientes caractes @ .com'),
    check('password')
        .notEmpty().withMessage('El campo password es obligatorio')
        .isString().withMessage('El campo password debe ser de tipo string'),
]

module.exports = checksRegister