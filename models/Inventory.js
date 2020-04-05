const Hotel=require('./Hotel');
const GeneralUtilities=require('../utils/GeneralUtilities');
const ModelUtilities=require('../utils/ModelsUtilities');
const nodeFetch = require('node-fetch');

module.exports=class Inventory{
    constructor(){
        this.hotels=[];
    }

    async retrieveData(){
        // const URL=("https://"+process.env.THIRD_PARTY_HOST+"/bins/tl0bp");
        // const requestBody = {
        //     "method":"get",
        //     "headers": {"Content-Type": "application/json" }
        // };
        // const response=await nodeFetch(URL,requestBody);
        // const data=await response.json();
        const data=await GeneralUtilities.getHotelsFake();
        this.mapJson(data);
    }

    mapJson(aJson){
        if(aJson.hotels){
            for(let x=0;x<aJson.hotels.length;x++){
                let tempHotel=ModelUtilities.createInstanceAndMap(Hotel,aJson.hotels[x]);
                this.hotels.push(tempHotel);
            }
        }
    }

    search(name,city,priceFrom,priceTo,fromDate,toDate)
    {
        let searchResult=[];
        this.hotels.forEach(hotel => {
            if( hotel.isMatchingCriteria(name, city, priceFrom, priceTo, fromDate, toDate) ){
                searchResult.push(hotel);
            }
        });
        return searchResult;
    }

    sort(array,sortByname,nameSortType,sortByPrice,priceSortType)
    {
        let sortResult=GeneralUtilities.arrayCopy(array);
        if(sortByname){
            GeneralUtilities.sortArrayOfObjects(sortResult,"name",String,nameSortType);
        }
        if(sortByPrice){
            GeneralUtilities.sortArrayOfObjects(sortResult,"price",Number,priceSortType);
        }
        return sortResult;
    }
}