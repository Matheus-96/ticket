const controller = require('../controller/user')
const controllerDepartment = require('../controller/department')
const express = require("express")
const router = express.Router()


//Rotas da View
router.get('/list', async (req, res) => {
    let tickets = await controller.getAll()
    res.render('ticket/list', {
        tickets
    })
})

router.get('/register', async (req, res) => {
    let departments = await controllerDepartment.getAll()
    console.log(departments)
    res.render('common/register', {
        departments
    })
})


router.get('/create', async (req, res) => {
    let departments = await controllerDepartment.getAll()
    console.log(departments)
    res.render('ticket/create', {
        departments
    })
})

router.get('/view/:id', async (req, res) => {
    let ticket = await controller.get(req.params.id)
    res.render('ticket/view', {
        ticket: ticket
    })
})

//Rotas da API

router.post('/api/login', async(req, res) => {
    let loginData = await controller.login(req.body)
    if(loginData) {
        req.session.user = loginData
        res.redirect('/ticket/list')
    } else {
        res.redirect('/?forbidden=true')
    }
})

router.post('/api/create', async (req, res) => {
    await controller.post(req.body)
    res.redirect('/')
})

router.get('/api/logout', async (req, res) => {
    await controller.logout(req.session)
    res.redirect('/')
})
module.exports = router;