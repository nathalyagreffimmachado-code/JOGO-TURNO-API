import game from '../model/partida.js'
 
class RepositoryGame {
   
    async find() {
        const games = await game.findAll()
 
        return games
    }
 
    async findById(id) {
        const gameDetalhe = await game.findByPk(id)
 
        return gameDetalhe
    }
 
    async Create(Descricao,data,Vencedor) {
        const gameCreate = await game.create({ Descricao,data,Vencedor})
 
        return gameCreate
    }
 
    async Update(id,Descricao,data,Vencedor) {
        const gameAlterar = await game.findByPk(id)
 
        if(!gameAlterar){
            throw new Error("partida não encontrada")
        }
 
        gameAlterar.Descricao = Descricao
        gameAlterar.data = data
         gameAlterar.Vencedor = Vencedor
 
        await gameAlterar.save()
 
        return gameAlterar
    }
 
    async Delete(id) {
        const gameDeletar = await game.findByPk(id)
 
        if(!gameDeletar){
            throw new Error("partida não encontrado")
        }
 
        await gameDeletar.destroy()
 
        return gameDeletar
    }
}
 
export default new RepositoryGame()