const Hotel=require('./Hotel');
const GeneralUtilities=require('../utils/GeneralUtilities');
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
        // const data=await nodeFetch(URL,requestBody);
        const data=await GeneralUtilities.getHotelsFake();
        this.mapJson(data);
    }

    mapJson(aJson){
        if(aJson.hotels){
            for(let x=0;x<aJson.hotels.length;x++){
                let tempHotel=new Hotel();
                tempHotel.mapJson(aJson.hotels[x]);
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

    sort(array,name,nameSortType,price,priceSortType)
    {
        let sortResult=GeneralUtilities.arrayCopy(array);
        if(name){
            GeneralUtilities.sortArrayOfObjects(sortResult,"name",String,nameSortType);
        }
        if(price){
            GeneralUtilities.sortArrayOfObjects(sortResult,"price",Number,priceSortType);
        }
        return sortResult;
    }
}