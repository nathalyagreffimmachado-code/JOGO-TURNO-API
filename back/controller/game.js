import ServiceGame from '../service/game.js'
 
class ControllerGame {
    status(req, res) {  
          const resultado = ServiceGame.status()
          res.send(resultado)
        
    }
 
   ataque(req, res) {  
          const resultado = ServiceGame.ataque()
          res.send(resultado)
        
    }
 
    defesa(req, res) {  
          const resultado = ServiceGame.defesa()
          res.send(resultado)
        
    }
 
    curar(req, res) {  
          const resultado = ServiceGame.curar()
          res.send(resultado)
        
    }
 
    resetar(req, res) {  
          const resultado = ServiceGame.resetar()
          res.send(resultado)
        
    }
}
 
export default new ControllerGame()