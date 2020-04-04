const GeneralUtilities=require('../utils/GeneralUtilities');

module.exports=class Availability{
    constructor(){
        this.from=null;
        this.to=null;
    }

    mapJson(aJson){
        if(aJson.from){
            if(GeneralUtilities.isDateDMYFormat(aJson.from))
            {
                this.from=new Date(GeneralUtilities.dateToYMDFormat(aJson.from));
            }
            else
            {
                this.from=new Date(aJson.from);
            }
        }

        if(aJson.to){
            if(GeneralUtilities.isDateDMYFormat(aJson.to)){
                this.to=new Date(GeneralUtilities.dateToYMDFormat(aJson.to));
            }
            else{
                this.to=new Date(aJson.to);
            }
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