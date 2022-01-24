const controller = require('../controller/user')
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
    //let tickets = await controller.getAll()
    res.render('common/register')
})


router.get('/create', (req, res) => {
    res.render('ticket/create', {
        department: ['Extrusão', 'Corte', 'Manutenção', 'RH', 'Contabilidade', 'Cadastros', 'Geral', 'Comercial']
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
        req.session.username = loginData.username
        req.session.userId = loginData._id
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