const controller = require('../controller/department')
const express = require("express")
const router = express.Router()
const multer = require('multer')

const upload = multer({
    dest: 'public/department/'
})

//Rotas da View

router.get('/list', async (req, res) => {
    let departments = await controller.getAll()
    res.render('department/list', {
        departments
    })
})


router.get('/create', (req, res) => {
    res.render('department/create')
})

router.get('/view/:id', async (req, res) => {
    let department = await controller.get(req.params.id)
    res.render('department/view', { department })
})

//Rotas da API

router.post('/api/create', upload.single('image'), async (req, res) => {
    await controller.post(req)
    res.redirect('/department/list')
})
module.exports = router;