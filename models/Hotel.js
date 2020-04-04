const Availability=require('./Availability');
const ModelUtilities=require('../utils/ModelsUtilities');
const GeneralUtilities=require('../utils/GeneralUtilities');

module.exports=class Hotel{
    constructor(){
        this.name=null;
        this.city=null;
        this.price=null;
        this.availability=[];
    }

    mapJson(aJson){
        this.name=aJson.name;
        this.city=aJson.city;
        this.price=aJson.price;
        
        if(aJson.availability){
            for(let x=0;x<aJson.availability.length;x++){
                let tempAvailability=ModelUtilities.createInstanceAndMap(Availability,aJson.availability[x]);
                this.availability.push(tempAvailability);
            }
        }
    }

    isMatchingCriteria(name,city,priceFrom,priceTo,fromDate,toDate){
        let isMatch=true;
        if(name){
            isMatch = ( isMatch && this.name===name );
        }

        if(city){
            isMatch = ( isMatch && this.city===city );
        }

        if(priceFrom && priceTo){
            isMatch = ( isMatch && GeneralUtilities.isValueInRange(Number,priceFrom,this.price,priceTo) );
        }

        if(fromDate && toDate){

            let datesMatch=false;
            this.availability.forEach(availability =>{

                datesMatch = ( datesMatch || availability.isAvailableAt(fromDate,toDate) );
            });
            isMatch = ( isMatch && datesMatch );

        }

        return isMatch;
    }
}