exports.auth = (req, res, next) => {
    if(req.session.user){
        process.session = req.session
        return next()
    }
    else {
        return res.redirect('/')
    }

}
