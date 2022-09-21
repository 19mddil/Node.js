module.exports = function (req, res, next) {
    // console.log(req.user.role);
    if (req.user.role !== 'admin') return res.status(403).send("Forbidden, because user is not admin");
    next();
}