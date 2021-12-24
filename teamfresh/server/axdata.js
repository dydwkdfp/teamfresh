const axios = require('axios');
const axdata = async (city, callback) => {
    const decodedcity=decodeURIComponent(city)

    console.log(decodedcity);

    const url = `https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest`
    try {
      const response = await axios.post(url, 
        { 
            addrBasic:decodedcity
        }
      )

      const posibility = response.data
      
      console.log(posibility);
      callback(undefined, {posibility})
    } catch (error) {
      console.log('error broke out:  ', error) 
    }  
  }
  
  module.exports = axdata;