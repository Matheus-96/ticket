require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'localStorage/' })

const express = require('express')

const app = express();
const port = process.env.APP_PORT || 3000
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

// Duração do cookie
const oneDay = 1000 * 60 * 60 * 24;
const middlewares = require('./src/middlewares/main')
//Arquivos estáticos
app.use(express.static('public'))

//Middlewares e extensões

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

//Rotas da API
const userRoute = require('./src/routes/user');
app.use('/user', userRoute)

//Rotas
const ticketRoute = require('./src/routes/ticket');
app.use('/ticket', middlewares.auth, ticketRoute)
app.get('/', (req, res) => {

    let session = req.session
    console.log(req.session)
    if(session.username){
        res.redirect('ticket/list')
    } else {
        res.render('common/login', req.query)
    }

})
//View Engine
app.set('view engine', 'pug')
app.set('views', (__dirname + '/src/view'));

app.listen(port, () => {
    console.log("Node rodando e ouvindo a porta " + port)
})