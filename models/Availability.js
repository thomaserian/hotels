const GeneralUtilities=require('../utils/GeneralUtilities');

module.exports=class Availability{
    constructor(){
        this.from=null;
        this.to=null;
    }

    mapJson(aJson){
        if(aJson.from){
            this.from=GeneralUtilities.getDateObjectFromString(aJson.from);
        }

        if(aJson.to){
            this.to=GeneralUtilities.getDateObjectFromString(aJson.to);
        }
    }

    isAvailableAt(fromDate,toDate){
        let isAvailable=true;
        if(fromDate,toDate)
        {
            isAvailable = isAvailable && GeneralUtilities.isRangeInRange(Date,this.from,fromDate,toDate,this.to);
        }
        return isAvailable;
    }
}