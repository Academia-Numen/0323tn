const express = require('express')
const router = express.Router()
const userController= require('../controller/userController')
const auth = require('../middlewares/auth')
const checksRegister = require('../middlewares/checkRegister')
const checksLogin = require('../middlewares/checksLogin')
const {validarChecks}= require('../middlewares/validarChecks')
const validarToken = require('../middlewares/validarToken')

router.get('/session', userController.pruebaSession)
router.get('/test',auth,userController.test)
router.get('/cerrar',userController.cerrarSession)
router.get('/hash',userController.hash)
router.post('/crearusuario',checksRegister,validarChecks,userController.register)


///session
router.post('/login',checksLogin,validarChecks,userController.login)
router.delete('/logout',userController.logout)

// tokens

router.post('/pruebatoken',userController.pruebaToken)
router.get('/testtoken',validarToken,userController.pasoElToken)
router.post('/logintoken',checksLogin,validarChecks,userController.loginToken)


module.exports = router
  