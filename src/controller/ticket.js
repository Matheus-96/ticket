const ticketRepository = require('../repository/ticket')
const db = require('../database/db_connect')

db.connectDatabase()

exports.post = async (req) => {
    await ticketRepository.post(req)

}

exports.postMov = async (req) => {
    await ticketRepository.postMov(req)

}

exports.getAll = async () => {
    return await ticketRepository.getAll()
}

exports.getAllMovs = async (id) => {
    return await ticketRepository.getAllMovs(id)
}

exports.getFromUser = async (userId) => {
    return await ticketRepository.getFromUser(userId)
}

exports.get = async (id) => {
    return await ticketRepository.get(id)
}

exports.finishTicket = async (id) => {
    return await ticketRepository.finishTicket(id)
}