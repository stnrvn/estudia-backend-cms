const { verifyToken } = require('../helpers/jwt')
const { User, Task } = require('../models')

async function authenticate(req, res, next){
    try {
        let decoded = verifyToken(req.headers.access_token)

        let result = await User.findOne({
            where: {
                username: decoded.username
            }
        })

        if(result){
            req.user = result
            next()
        } else {
            return res.status(400).json({
                message: 'Please login first!'
            })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function authorize(req, res, next){
    try {
        const result = await Task.findOne({
            where: {
                id: req.params.id
            }
        })

        if(result || result === req.user.id){
            next()
        } else {
            res.status(401).json({
                message: "You don'thave permission to delete this!"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    authenticate,
    authorize
}