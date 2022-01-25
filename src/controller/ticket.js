const ticketRepository = require('../repository/ticket')
const db = require('../database/db_connect')

db.connectDatabase()

exports.post = async (req) => {
    await ticketRepository.post(req)

}

exports.getAll = async () => {
    return await ticketRepository.getAll()
}

exports.getFromUser = async (userId) => {
    return await ticketRepository.getFromUser(userId)
}

exports.get = async (id) => {
    return await ticketRepository.get(id)
}