import RepositoryPartida from '../repository/partida.js'
class ServicePartida {
 
    async Buscar() {
        return RepositoryPartida.find()
    }
 
    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID da partida")
        }
 
        const partida = await RepositoryPartida.findById(id)
       
        if(!partida) {
            throw new Error(`ID ${id}da partida não encontrado`)
        }
 
        return partida
    }

    async Criar(Descricao,data,Vencedor) {
         if (! Descricao|| !data || !Vencedor) {
             throw new Error("Favor informar todos os dados da partida")
         }
         const partida = await RepositoryPartida.Create( Descricao,data,Vencedor)
 
         return partida
    }
 
    async Alterar(id,Descricao,data,Vencedor) {
        if (!id || !Descricao || !data || !Vencedor) {
            throw new Error("Favor informar os dados da partida");
        }
 
        const partidaAlterado = await RepositoryPartida.Update(id, Descricao,data,Vencedor)
 
        return partidaAlterado
    }
 
    async Deletar(id) {
 
        if (!id) {
            throw new Error("Favor informar o ID da partida")
        }
       
        const partida = await RepositoryPartida.Delete(id)
 
        return partida
    }
 
}
 
export default new ServicePartida()