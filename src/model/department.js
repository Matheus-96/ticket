const mongoose = require('mongoose')

exports.Department = 
    mongoose.model('Department', {
        department: {
            type: String
        },
        departmentImage: {
            type: String
        }
    })
