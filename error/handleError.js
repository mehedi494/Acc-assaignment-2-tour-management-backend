module.exports.handleError = (req, res, err) => {
    if (err) {
        res.json({
            status: "Faild",
            error: err.message
        })
    }
    else {
        res.json({
            status: "Faild",
            message: "internal server error ",
            error: err.message

        })
    }
}