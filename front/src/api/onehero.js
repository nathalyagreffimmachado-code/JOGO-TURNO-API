import api from './api'

export async function atacar() {
    const response = await api.get('/jogo/ataque')
    return response.data 
}

export async function defender() {
    const response = await api.get('/jogo/defesa')
    return response.data
}

export async function curar() {
    const response = await api.get('/jogo/curar')
    return response.data
}

export async function status() {
    const response = await api.get('/jogo/status')
    return response.data
}