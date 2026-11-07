import partida from '../model/partida.js'

class RepositoryPartida {
   
    async find() {
        const partida = await partida.findAll()
 
        return partida
    }
 
    async findById(id) {
        const partidaDetalhe = await partida.findByPk(id)
 
        return partidaDetalhe
    }
 
    async Create(descricao,data,vencedor) {
        const partidaCreate = await partida.create({ descricao,data,vencedor})
 
        return partidaCreate
    }
 
    async Update(id,descricao,data,vencedor) {
        const partidaAlterar = await partida.findByPk(id)
 
        if(!partidaAlterar){
            throw new Error("usuario não encontrado")
        }
 
        partidaAlterar.Descricao = descricao
        partidaAlterar.data = data
        partidaAlterar.Vencedor = vencedor


 
        await partidaAlterar.save()
 
        return partidaAlterar
    }
 
    async Delete(id) {
        const partidaDeletar = await partida.findByPk(id)
 
        if(!partidaDeletar){
            throw new Error("usuario não encontrado")
        }
 
        await partidaDeletar.destroy()
 
        return partidaDeletar
    }

    async findByEmail(email){
        return partida.findOne({ where: {email} })
    }
}
 
export default new RepositoryPartida()