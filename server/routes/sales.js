import  express, { Router }  from "express";
import {getSales} from "../controllers/sales.js"
const router = express.Router();

router.get("/sales",getSales)

export default router