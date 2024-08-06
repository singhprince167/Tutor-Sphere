import  express  from "express";
import {addFeedBack,addContact, addLoginpage, SearchTutor } from "../controllers/common_controllers.js";


const common_routes=express.Router();
 //common_routes.get("/",home)
common_routes.post("/addFeedBack",addFeedBack)
common_routes.post("/addContact",addContact);
common_routes.post("/addLoginpage",addLoginpage)
common_routes.get("/SearchTutor",SearchTutor)


export default common_routes