import express from 'express'
import ControllerPartida from '../controller/partida.js'
 
const router = express.Router()
 
router.get("/", ControllerPartida.Buscar)
 
router.get("/:id", ControllerPartida.Detalhe)
 
router.post("/", ControllerPartida.Criar)
 
router.put("/:id", ControllerPartida.Alterar)
 
router.delete("/:id", ControllerPartida.Deletar)
 
export default router