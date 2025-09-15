import express from "express";
import {
  home,
  addUser,
  login,
  profile,
  userEdit,
  compose_message,
  userInbox,
  allResources,
  allTutors,
  meetingRequest
} from "../controllers/user_controllers.js";

const userRouter = express.Router();

// Routes
userRouter.get("/", home);
userRouter.post("/login", login);
userRouter.get("/profile", profile);
userRouter.post("/addUser", addUser);   // ✅ changed here (was /add-user)
userRouter.post("/editUser", userEdit); // ✅ also made consistent
userRouter.post("/composeMessage", compose_message);
userRouter.get("/userInbox", userInbox);
userRouter.get("/allResources", allResources);
userRouter.get("/allTutors", allTutors);
userRouter.post("/meetingRequest", meetingRequest);

export default userRouter;
