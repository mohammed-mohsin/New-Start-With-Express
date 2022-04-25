// const res = require("express/lib/response")

// exports.Hello(req,res) => {
//     res.status(200).json({status:"success",
//     data:"Hello This is my first rest api"})
// }

exports.Hello = (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Hello This is my first rest api"
    })
}
