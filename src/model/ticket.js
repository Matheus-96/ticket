const mongoose = require('mongoose')

exports.Ticket = 
    mongoose.model('Ticket', {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            default: Date.now()
        },
        department: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Department'
        },
        priority: {
            type: Number,
            default: 1,
        },
        description: {
            type: String,
            required: true
        },
        files: [
            {
                originalName: {
                    type: String
                },
                name: {
                    type: String,
                }
            }
        ],
        status: {
            type: String,
            default: "open"
        }
    })
