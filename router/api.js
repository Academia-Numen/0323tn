const express = require('express')
const router = express.Router()
const apiController = require('../controller/apiController')
const {validarID}= require('../middlewares/validarID')
const checks = require('../middlewares/checks')
const {validarChecks}= require('../middlewares/validarChecks')
const validarToken = require('../middlewares/validarToken')

// metodo http - URN o expresion - middlewares - middlewares - middlewares - middlewares - middlewares - callback

router.get('/list', validarToken,apiController.apiList)
router.post('/crear',validarToken, checks,validarChecks,apiController.apiCrearProducto)
router.put('/editar/:id',validarID,checks,validarChecks ,apiController.apiPut)
router.delete('/eliminar/:id', validarID,apiController.apiDelete)

//finds

router.get('/buscarid/:id',validarID ,apiController.apiFindId)
router.get('/buscarone', apiController.apiFindOne)
router.get('/buscar', apiController.apiSearch)



module.exports = router
  