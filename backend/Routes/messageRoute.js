import { Router } from "express";
import { getMessage, sendMessage } from "../Controllers/messageController.js";


const router = Router();

router.route("/send/:id").post( sendMessage)
router.route("/:id").get( getMessage)

export default router