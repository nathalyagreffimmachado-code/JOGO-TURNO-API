import RepositoryGame from "../repository/game.js";
class ServiceGame {
 
    // Core- Regra de Negocio
    async status() {
        return RepositoryGame.find()
    }
 
    async ataque(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }
 
        const game = await RepositoryGame.findById(id)
       
        if(!game) {
            throw new Error(`ID ${id} da partida não encontrado`)
        }
 
        return game
    }
    // Função(parametros, parametros, parametros)
    async defesa(Descricao,data,Vencedor) {
         if (!Descricao || !data || !Vencedor) {
             throw new Error("Favor informar todos os dados")
         }
         const game = await RepositoryGame.defesa( Descricao,data,Vencedor )
 
         return game
    }
 
    async curar(id,Descricao,data,Vencedor  ) {
        if (!id || !Descricao || !data || !Vencedor) {
            throw new Error("Favor informar os dados");
        }
 
        const gameAlterado = await RepositoryGame.curar(id, Descricao,data,Vencedor)
 
        return gameAlterado
    }
 
    async resetar(id) {
 
        if (!id) {
            throw new Error("Favor informar o ID")
        }
       
        const game = await RepositoryGame.resetar(id)
 
        return game
    }
 
}
 
export default new ServiceGame()