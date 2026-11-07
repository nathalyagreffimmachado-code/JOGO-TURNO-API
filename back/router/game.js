import express from 'express'
import ControllerGame from '../controller/game.js'
 
const router = express.Router()
 
router.get("/status", ControllerGame.status)
 
router.get("/ataque", ControllerGame.ataque)
 
router.get("/defesa", ControllerGame.defesa)
 
router.get("/curar", ControllerGame.curar)
 
router.get("/resetar", ControllerGame.resetar)
 
export default router