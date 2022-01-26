require('dotenv').config()
const mime = require('mime-types')
const nodemailer = require('nodemailer')

const {
    User
} = require('../model/user')

const fs = require('fs')



exports.post = async (data) => {
    
    let user = new User(data)

    user.save()
}

exports.getAll = async () => {
    return await User.find()
}


exports.get = async (id) => {
    return await User.find({_id: id})
}

exports.login = async (body) => {
    return await User.findOne({username: body.username, password: body.password})
}
