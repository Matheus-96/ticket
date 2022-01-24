const mongoose = require('mongoose')

require('dotenv').config()

exports.connectDatabase = async () => {
    await mongoose.connect(process.env.DB_URL)
}

exports.disconnectDatabase = async () => {
    await mongoose.disconnect();
}