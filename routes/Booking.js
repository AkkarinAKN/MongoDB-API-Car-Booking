import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking } from './../controllers/controlBooking.js';
const router = express.Router();


//create
router.post("/:serviceid", createBooking);

//update
router.put("/:id", verifyAdmin, updateBooking);

//DELETE
router.delete("/:id", verifyAdmin, deleteBooking);

//GET
// router.get("/:id", verifyAdmin, getBooking);

//GET ALL
router.get("/", verifyAdmin, getBookings);

export default router;