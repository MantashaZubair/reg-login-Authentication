import express from "express"
const router = express.Router()
import UserController from "../controller/userController.js"

router.get("/", UserController.createDox);
router.get("/resistration", UserController.ResistrationDox);
router.post("/resistration", UserController.ResisterForm);
router.get("/login", UserController.LoginDox);
router.post("/login", UserController.Login);
router.post("/dashboard", UserController.Login);
router.get("/forgot", UserController.ForgotDox);
router.get("/forgot/:id", UserController.Forgot);



export default router