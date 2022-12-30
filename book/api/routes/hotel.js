import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controller/hotel.js"
import { verifyadmin } from "../utils/verifyToken.js"

const router = express.Router()


//create
router.post("/", verifyadmin, createHotel)


//update
router.put("/:id", verifyadmin, updateHotel)

//delete

router.delete("/:id", verifyadmin, deleteHotel)

//get 

router.get("/find/:id", getHotel)

//get all

router.get("/", getAllHotel)

router.get("/countByCity", countByCity)

router.get("/countByType", countByType)

router.get("/room/:id", getHotelRooms)





export default router