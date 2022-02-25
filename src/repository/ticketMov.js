

exports.getAll = async (id) => {
    return await TicketMov.find({ticket: id}).populate('user')
}

exports.getFromUser = async (userId) => {
    return await Ticket.find({user: userId}).populate('user')
}

exports.get = async (id) => {
    return await Ticket.find({_id: id}).populate('user department')
}