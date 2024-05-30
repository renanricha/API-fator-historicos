import express from 'express'
const app = express()
import retornaFato from './servico/servico.js'

app.get('/', (req,res) => {
    let ano = retornaFato(2020)
    res.json({mensagem: ano + 1})
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})