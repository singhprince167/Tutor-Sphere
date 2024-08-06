import express  from "express";
import { home,addUser,login, profile,userEdit,compose_message,User_inbox,allresourse,alltutorsOnUserHeader,meetingrequest} from "../controllers/user_controllers.js";
const user_route=express.Router()
user_route.get('/',home)
user_route.post("/login",login)
user_route.get("/profile",profile)
user_route.post('/addUser',addUser)
user_route.post('/userEdit',userEdit)
user_route.post("/compose_message",compose_message)
user_route.get("/User_inbox",User_inbox)
user_route.get("/allresourse",allresourse)
user_route.get("/alltutorsOnUserHeader",alltutorsOnUserHeader)
user_route.post("/meetingrequest",meetingrequest)

export default user_route