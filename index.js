import express from 'express'
const app = express()
import {retornaFato,validaAno} from './servico/servico.js'

app.get('/fatos', (req,res) => {
    let ano = req.query.Ano    
    let fatoHist = retornaFato(ano)
    if (validaAno(ano)) {
        res.json({fato: fatoHist[0].Fato})
    }
    else
    {
        res.status(400).json({erro: "Parâmetro Ano inválido"})
    }

})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})