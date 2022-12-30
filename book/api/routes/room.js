import express from "express"
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controller/room.js"
import { verifyadmin } from "../utils/verifyToken.js"

const router = express.Router()


//create
router.post("/:hotelid", verifyadmin, createRoom)


//update
router.put("/:id", verifyadmin, updateRoom)
router.put("/availability/:id", updateRoomAvailability)
    //delete

router.delete("/:id/:hotelid", verifyadmin, deleteRoom)

//get 

router.get("/:id", getRoom)

//get all

router.get("/", getAllRoom)

export default router