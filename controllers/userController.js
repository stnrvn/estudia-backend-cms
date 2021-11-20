const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{
  static async register(req, res){
    try {
      const opt = {
        username: req.body.username,
        password: req.body.password
      }

      const result = await User.create(opt)
      const response = {
        id: result.id,
        username: result.username
      }

      return res.status(201).json(response) 
    } catch (error) {
      return res.status(500).json({
        message: error.errors[0].message
      })
    }
  }

  static async login(req, res){
    try {
        const opt = {
            username: req.body.username,
            password: req.body.password
        }

        const result = await User.findOne({
            where: {
                username: opt.username
            }
        })

        if(!result){
            return res.status(401).json({
                message: 'Invalid username / password'
            })
        }

        const match = comparePassword(opt.password, result.password)

        if(match){
            const payload = {
                id: result.id,
                username: result.username,
                role: result.role
            }

            const access_token = generateToken(payload)

            return res.status(200).json({
                access_token
            })
        } else {
            return res.status(401).json({
                message: 'Invalid username / password'
            })
        }
    } catch (error) {
        return res.status(500).json({
          message: error.errors[0].message
        })
    }
  }
}

module.exports = UserController