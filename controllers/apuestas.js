const axios = require('axios');

const apuestasGet = async () => {

    try {
        url="https://sb2frontend-altenar2.biahosted.com/api/Sportsbook/GetLiveEvents?timezoneOffset=300&langId=4&skinName=doradobet&configId=12&culture=es-ES&countryCode=PE&deviceType=Mobile&numformat=en&integration=doradobet&sportids=66&categoryids=0&champids=0&group=Championship&outrightsDisplay=none&couponType=0&marketGroupId=0&filterSingleNodes=2&hasLiveStream=false"
        
        const  resp= await axios.get(url)
        const {Result} = resp.data
        const {Items} = Result
        
            Items.map(({Items})=>{
                Items.map(({Name,Events}) => {
                    const caracter = "=".repeat(Name.length)
                    console.log(caracter)
                    console.log(`${Name}`)
                    console.log(caracter)
                    Events.map(({Name,Items})=>{
                        console.log(`${Name}\n`)
                        Items.map(({ShortName,Items})=>{
                            console.log(`Tipo de apuesta ${ShortName}`)
                            Items.map(({Name,Price})=>{
                                console.log(`${Name} paga x${Price}`)
                            })
                            console.log('\n')

                        })
                    })

                })
            })
        

        // console.log(Items)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports= {
    apuestasGet
}