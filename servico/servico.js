import fatosHistoricos from '../dados/fatos.js'

function validaAno(ano) {
    return ano >= 1920 && ano <= 2020
}

function retornaFato(ano) {
    let fatoFiltrado = fatosHistoricos.filter((fato) => fato.Ano == ano)
    return fatoFiltrado
}

export {retornaFato, validaAno}