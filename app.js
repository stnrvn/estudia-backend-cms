const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const router = require('./routes')
const fs = require('fs')
const path = require('path')
const multiparty = require('connect-multiparty')

const MuiltiPartyMiddleware = multiparty({uploadDir:"./images"})

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({
    extended:true
}))

app.use('/images', express.static('./images'))

app.use(express.static("uploads"))
app.post('/upload', MuiltiPartyMiddleware, (req, res) =>{
  let TempFile = req.files.upload
  let TempPathfile = TempFile.path

  const targetPathUrl = path.join(__dirname,"./uploads/"+TempFile.name)

  if(path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
    
    fs.rename(TempPathfile, targetPathUrl, err =>{

        res.status(200).json({
        uploaded: true,
          url: `http://localhost:3001/${TempFile.originalFilename}`
        });

        if(err) return console.log(err)
    })
  }
})

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})