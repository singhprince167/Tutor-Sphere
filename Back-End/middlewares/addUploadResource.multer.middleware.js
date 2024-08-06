import exp from 'constants'
import multer from 'multer'
import path from 'path'
const storage=multer.diskStorage({
destination:'./public/addUploadResource',
filename:(req,file,cb)=>{

    cb(null,file.originalname)
    //cb(null,file.originalname+"_"+Date.now()+path.extname(file.originalname))
}



})

const upload_image=multer({

storage:storage

}).single("photo")//input type=file name="pic"
export default upload_image