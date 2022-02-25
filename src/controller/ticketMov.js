const ticketMovRepository = require('../repository/ticketMov')
const db = require('../database/db_connect')

db.connectDatabase()

exports.post = async (req) => {
    await ticketMovRepository.post(req)

}

exports.getAll = async (id) => {
    return await ticketMovRepository.getAll(id)
}

exports.getFromUser = async (userId) => {
    return await ticketMovRepository.getFromUser(userId)
}

exports.get = async (id) => {
    return await ticketMovRepository.get(id)
}