const departmentRepository = require('../repository/department')
const db = require('../database/db_connect')

db.connectDatabase()

exports.post = async (body) => {
    return await departmentRepository.post(body)

}

exports.getAll = async () => {
    return await departmentRepository.getAll()
}

exports.get = async (id) => {
    return await departmentRepository.get(id)
}

exports.login = async (body) => {
    return await departmentRepository.login(body)
}

exports.logout = async (session) => {
    process.session = 'undefined'
    return await session.destroy()
}