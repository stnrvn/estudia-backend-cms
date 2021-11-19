const { SpanishClass } = require('../models')

class SpanishClassController{
  static async create (req, res){
    try {
      const payload = {
        title: req.body.title,
        body: req.body.body,
        description: req.body.description,
        featured: req.body.featured
      }

      const response = await SpanishClass.create(payload)

      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async get(req, res){
    try {
      const response = await SpanishClass.findAll()

      return res.json(response)
    } catch (error) {
      return res.status(500).json(error)  
    }
  }

  static async getById(req, res){
    try {
      const id = +req.params.id

      const response = await SpanishClass.findOne({
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
        title: req.body.title,
        body: req.body.body,
        description: req.body.description,
        featured: req.body.featured
      }

      const response = await SpanishClass.update(payload, {
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

      const response = await SpanishClass.destroy({
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

module.exports = SpanishClassController