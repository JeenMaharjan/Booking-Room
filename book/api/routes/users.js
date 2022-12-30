import express from "express"

import { deleteUsers, getAllUsers, getUsers, updateUsers } from "../controller/user.js"
import { verifyadmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello you are loged in")
// })

// router.get("/checkadmin/:id", verifyadmin, (req, res, next) => {
//     res.send("hello you are loged in as admin")
// })

router.put("/:id", verifyUser, updateUsers)

//delete

router.delete("/:id", verifyUser, deleteUsers)

//get 

router.get("/:id", verifyUser, getUsers)

//get all

router.get("/", verifyadmin, getAllUsers)

export default router