const userRepository = require('../repository/user')
const db = require('../database/db_connect')

db.connectDatabase()

exports.post = async (body) => {
    await userRepository.post(body)

}

exports.getAll = async () => {
    return await userRepository.getAll()
}

exports.get = async (id) => {
    return await userRepository.get(id)
}

exports.login = async (body) => {
    return await userRepository.login(body)
}

exports.logout = async (session) => {
    return await session.destroy()
}