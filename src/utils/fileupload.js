const mutler = require('multer');
const path = require ('path');


const storage = mutler.diskStorage({
     destination: function (req, file, cb) {
       cb(null, path.join(__dirname,'../../uploads'))
     },
     filename: function (req, file, cb) {
       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
       cb(null,  uniqueSuffix+'-'+file.originalname);
     }
   })


   function fileFilter (req, file, cb) {

     // The function should call `cb` with a boolean
     // to indicate if the file should be accepted
     if(file.mimetype== 'image/jpeg'|| file.mimetype=='image/png')
          cb(null, true);
     else          
          cb(null, false);
   
   }

const upload = mutler({
     storage:storage,
     filleFilter:fileFilter,
     limits:{
          fileSize: 1024*1024*5    
     }

});

module.exports=upload;