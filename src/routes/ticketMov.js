const controller = require('../controller/ticketMov')
const express = require("express")
const router = express.Router()

//Rotas da View

router.get('/list', async (req, res) => {
    let ticketMov = await controller.getAll()
    res.render('department/list', {
        ticketMov
    })
})

//Rotas da API



module.exports = router;