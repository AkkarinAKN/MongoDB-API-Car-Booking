import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoute, updateRoute,deleteRoute, getRoute } from './../controllers/controlRoute.js';
const router = express.Router();

router.post("/", verifyAdmin,createRoute);

router.put("/:id", verifyAdmin,updateRoute);

router.delete("/:id",verifyAdmin,deleteRoute);

router.get("/", verifyAdmin,getRoute)

export default router;