import express from 'express'
import routerGame from './router/game.js'
import routerPartida from './router/partida.js'
import cors from 'cors'
import database from './config/database.js'


const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/game', routerGame)
app.use('/api/v1/partida', routerPartida)


const PORT = 3000
database.db.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Servidor Porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })