const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{
  static async register(req, res){
    try {
      const opt = {
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }

      const result = await User.create(opt)
      const response = {
        id: result.id,
        username: result.username
      }

      return res.status(201).json(response) 
    } catch (error) {
      return res.status(500).json({
        message: error
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
          error
        })
    }
  }

  static async get(req, res){
    try {
      const { Op } = require("sequelize")
      const { username, page, length } = req.query

      let dataFilter = {
        username: ''
      }

      username ? dataFilter.username = { [Op.like]: `%${username}%` } : delete dataFilter.username
      
      function isEmpty(dataFilter) {
        for(var key in dataFilter) {
          if(dataFilter.hasOwnProperty(key))
          return false;
        }
        return true;
      }

      let condition = isEmpty(dataFilter) ? '' : dataFilter

      const response = await User.findAndCountAll({
        offset: (+page - 1) * (+length),
        limit: +length,
        where: condition,
        order: [
            ['id', 'DESC']
        ],
      })

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)  
    }
  }

  static async getById(req, res){
    try {
      const id = +req.params.id

      const response = await User.findOne({
        where: {
          id
        }
      })

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async update(req, res){
    try {
      const id = +req.params.id
      const payload = {
        username: req.body.username,
        password: req.body.username
      }

      const response = await User.update(payload, {
        where: {
            id
        },
        returning: true
      })

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async delete(req, res){
    try {
      const id = +req.params.id

      const response = await User.destroy({
        where: {
          id
        }
      })

      if(!response){
        return res.status(404).json({
          message: 'error not found'
        })
      }

      return res.status(200).json({
        message: 'data success to delete'
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = UserController