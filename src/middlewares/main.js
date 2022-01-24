exports.auth = (req, res, next) => {
    if(req.session.username){
        process.session = req.session
        return next()
    }
    else {
        return res.redirect('/')
    }

}
