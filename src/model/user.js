const mongoose = require('mongoose')

exports.User = 
    mongoose.model('User', {
        username: {
            type: String
        },
        password: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        },
        department: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Department'
        },
        email: {
            type: String
        },
        admin: {
            type: Boolean
        }
    })
