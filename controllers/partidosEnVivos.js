const axios = require('axios');

const partidosEnVivo = "https://sb2frontend-altenar2.biahosted.com/api/Sportsbook/GetLiveEvents?timezoneOffset=300&langId=4&skinName=doradobet&configId=12&culture=es-ES&countryCode=PE&deviceType=Mobile&numformat=en&integration=doradobet&sportids=66&categoryids=0&champids=0&group=Championship&outrightsDisplay=none&couponType=0&marketGroupId=0&filterSingleNodes=2&hasLiveStream=false"


const codigosPartidos =async () => {
    const resp =await axios.get(partidosEnVivo)
    const Results = resp.data
    const result = Results.Result
    const ids = result.Items.flatMap(item => 
        item.Items.flatMap(subItem => 
          subItem.Events.map(event => event.Id)
        )
      );
        
    return ids
    
}
module.exports= {
    codigosPartidos
}