const controller = require('../controller/ticket')
const express = require("express")
const router = express.Router()
require('dotenv').config()
const multer = require('multer')
const {
    restart
} = require('nodemon')
const upload = multer({
    dest: 'public/uploads/'
})

//Rotas da View

router.get('/list', async (req, res) => {
    let tickets = await controller.getAll()
    res.render('ticket/list', {
        tickets
    })
})

router.get('/create', (req, res) => {
    res.render('ticket/create', {
        department: ['Extrusão', 'Corte', 'Manutenção', 'RH', 'Contabilidade', 'Cadastros', 'Geral', 'Comercial']
    })
})

router.get('/view/:id', async (req, res) => {
    let ticket = await controller.get(req.params.id)
    console.log(ticket)
    res.render('ticket/view', {
        ticket: ticket
    })
})

//Rotas da API

router.post('/api/create', upload.array('attachments'), async (req, res) => {
    await controller.post(req)
    res.redirect('/ticket/list')
})
module.exports = router;