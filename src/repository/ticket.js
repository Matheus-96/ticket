require('dotenv').config()
const mime = require('mime-types')
const nodemailer = require('nodemailer')

const {
    Ticket
} = require('../model/ticket')

const fs = require('fs')



exports.post = async (data) => {
    
    let myMail = nodemailer.createTransport({
        host: "smtp.agm.ind.br",
        port: 587,
        secure: false,
        auth: {
            user: 'ti@agm.ind.br',
            pass: 'ti@2019#..'
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const mailOptions = {
        from: 'ti@agm.ind.br',
        to: process.session.email,
        subject: `Chamado - ${data.body.department}`,
        text: `
        Novo chamado aberto no setor ${data.body.department}
        ${data.body.description}
        `,
        replyTo: "victor.id96@hotmail.com"
    }

    myMail.sendMail(mailOptions, (err, res)=> {
        if(err)
            console.log("ERRO: ", err)
        else
            console.log("RES:", res)
    })
    let ticket = new Ticket(data.body)

    await data.files.map((e, i) => {
        let extension = "." + mime.extension(e.mimetype)
        let newName = e.filename + extension
        let originalName = e.originalname
        fs.rename(e.path, e.path + extension, err => {
            if (err) console.log("success")
        })
        ticket.files.unshift({
            originalName: originalName,
            name: newName
        })
    })

    ticket.save()
}

exports.getAll = async () => {
    return await Ticket.find().populate('user')
}

exports.getFromUser = async (userId) => {
    return await Ticket.find({user: userId}).populate('user')
}

exports.get = async (id) => {
    return await Ticket.find({_id: id}).populate('user')
}