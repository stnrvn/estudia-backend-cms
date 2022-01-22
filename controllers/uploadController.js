const fs = require('fs');
const path = require('path');

class UploadController{
  static async upload(req, res) {
    try {
        var TempFile = req.files.upload;
        var TempPathfile = TempFile.path;
    
       const targetPathUrl = path.join(__dirname, "../uploads"+ TempFile.name);
    
       if(path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
         
        fs.rename(TempPathfile, targetPathUrl, err =>{
    
            res.status(200).json({
             uploaded: true,
              url: `${TempFile.originalFilename}`
            });
    
            if(err) return console.log(err);
        })
       }
      console.log(req.files, 'cihuyyy');
      return res.send(req.files, 'ssdas')
    } catch (error) {
      console.log(error);
      return res.status(500).send(error)
    }
  }
}

module.exports = UploadController