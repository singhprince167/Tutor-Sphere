import express from "express";
import { admin,login,allFeedbacks,allcontacts,alltutors ,allusers,addUploadResource} from "../controllers/admin_controllers.js";
import upload_image from "../middlewares/addUploadResource.multer.middleware.js";

const admin_routes = express.Router()
admin_routes.get("/",admin)
admin_routes.post("/login",login)
admin_routes.get("/allFeedbacks",allFeedbacks)
admin_routes.get("/allcontacts",allcontacts)
admin_routes.get("/alltutors",alltutors)
admin_routes.get("/allusers",allusers)
admin_routes.post("/addUploadResource",upload_image,addUploadResource)

export default admin_routes

