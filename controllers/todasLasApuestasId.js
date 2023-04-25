const axios = require('axios');
const {codigosPartidos} = require('./partidosEnVivos')

const todasLasApuestas = async() => {
    const codigos = await codigosPartidos()
    console.log(codigos)
    
    codigos.forEach(async(codigo) => {
        const urlId= `https://sb2frontend-altenar2.biahosted.com/api/Sportsbook/GetEventDetails?timezoneOffset=300&langId=4&skinName=doradobet&configId=12&culture=es-ES&countryCode=PE&deviceType=Mobile&numformat=en&integration=doradobet&eventId=%20${codigo}&sportId=66`
        const resp = await axios.get(urlId)
        const Results = resp.data
        const partidos = Results.Result
        const {Name:partidoName,MarketGroups} = partidos
            const caracter = "=".repeat(partidoName.length)
            console.log(caracter)
            console.log(partidoName)
            console.log(caracter)
            const apuestaPrincipal= MarketGroups[0].Items   
            apuestaPrincipal.map(({Name,Items})=>{
                console.log(Name)
                Items.map(({Name,Price})=>{
                    console.log(`${Name} la cuota paga ${Price} `)
                })
                console.log("\n")
            })
    });
}


module.exports = {
    todasLasApuestas
}