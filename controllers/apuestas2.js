const axios = require('axios');

const apuestas2Get = async () => {

    try {
        url="https://sb2frontend-altenar2.biahosted.com/api/Sportsbook/GetEventDetails?timezoneOffset=300&langId=4&skinName=doradobet&configId=12&culture=es-ES&countryCode=PE&deviceType=Mobile&numformat=en&integration=doradobet&eventId=7626894&sportId=66"
        
        const  resp= await axios.get(url)
        const {Result} = resp.data
        const {Name,MarketGroups} = Result
            console.log(Name)
            MarketGroups.map(({Items})=>{
                Items.map((Name)=>{
                    console.log(Name)
                })
                
                })
            
        

        
    } catch (error) {
        console.log(error)
    }
}
module.exports= {
    apuestas2Get
}