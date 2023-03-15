import express from 'express'
import {getProdcuts , getCustomers, getTransactions, getGeography} from "../controllers/client.js"

const router = express.Router()

router.get("/products" ,  getProdcuts)
router.get("/customers" ,  getCustomers)
router.get("/transactions" ,  getTransactions)
router.get("/geography", getGeography);


export default router