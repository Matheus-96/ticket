const controller = require('../controller/ticket')
const controllerDepartment = require('../controller/department')
const controllerMovs = require('../controller/ticketMov')
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
const moment = require('moment')

//Rotas da View

router.get('/list', async (req, res) => {
    let tickets = (process.session.user.admin ? 
        await controller.getAll() : await controller.getFromUser(process.session.user._id))
    res.render('ticket/list', {
        tickets, moment
    })
})


router.get('/create', async(req, res) => {
    let departments = await controllerDepartment.getAll()
    res.render('ticket/create', {
        departments
    })
})

router.get('/view/:id', async (req, res) => {
    let ticket = await controller.get(req.params.id)
    ticket.movs = await controller.getAllMovs(req.params.id)
    console.log(ticket)
    res.render('ticket/view', {
        ticket: ticket, moment
    })
})

//Rotas da API

router.post('/api/create', upload.array('attachments'), async (req, res) => {
    await controller.post(req)
    res.redirect('/ticket/list')
})

router.post('/api/createMov', async (req, res) => {
    await controller.postMov(req)
    if(req.body.finished == 'on') controller.finishTicket(req.body.ticket)
    res.redirect('/ticket/list')
})
module.exports = router;