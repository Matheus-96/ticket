const mongoose = require('mongoose')

exports.TicketMov = 
    mongoose.model('TicketMov', {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            default: Date.now()
        },
        ticket: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Ticket'
        },
        description: {
            type: String,
            required: true
        }
    })
