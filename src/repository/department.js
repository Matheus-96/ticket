require('dotenv').config()
const mime = require('mime-types')
const nodemailer = require('nodemailer')

const {
    Department
} = require('../model/department')

const fs = require('fs')



exports.post = async (data) => {

    let department = new Department()

    if(data.file){
        let image = data.file
        let extension = "." + mime.extension(image.mimetype)
        let newName = image.path + extension
        fs.rename(image.path, newName, err => {
            if (err) console.log("erro ao processar solicitação")
        })
        department.departmentImage = image.filename + extension
    }

    department.department = data.body.department
    department.save()
}

exports.getAll = async () => {
    return await Department.find()
}


exports.get = async (id) => {
    return await Department.find({_id: id})
}

exports.login = async (body) => {
    return await Department.findOne({username: body.username, password: body.password})
}
