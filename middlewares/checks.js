const {check} = require('express-validator')

const checks = [
    check('marca')
        .notEmpty().withMessage('El campo marca es obligatorio')
        .isString().withMessage('El campo marca debe ser de tipo string'),
    check('modelo')
        .notEmpty().withMessage('El campo modelo es obligatorio')
        .isString().withMessage('El campo modelo debe ser de tipo string'),
    check('tipo')
        .notEmpty().withMessage('El campo tipo es obligatorio')
        .isString().withMessage('El campo tipo debe ser de tipo string'),
    check('precio')
        .notEmpty().withMessage('El campo precio es obligatorio')
        .isNumeric().withMessage('El campo precio debe ser de tipo number'),
]

module.exports = checks