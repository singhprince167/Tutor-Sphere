import express from "express";
import { addTutor,login,profile, TutorEdit,compose_message,tutor_inbox,pendingquery,update,AllAnswered} from "../controllers/tutor_controllers.js";

const tutor_routes = express.Router()

tutor_routes.post("/addTutor",addTutor)
tutor_routes.post("/login",login)
tutor_routes.get("/profile",profile)
tutor_routes .post("/tutoredit",TutorEdit)  //for updating the profile of a Tutor
tutor_routes.post("/compose_message",compose_message)
tutor_routes.get("/tutor_inbox",tutor_inbox)
tutor_routes.get("/pendingquery",pendingquery)
tutor_routes.post("/update",update)
tutor_routes.get("/AllAnswered",AllAnswered)





export default tutor_routes

