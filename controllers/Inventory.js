const InventoryServices=require('../services/InventoryServices');
const GeneralUtilities=require('../utils/GeneralUtilities');

module.exports.InventorySearchController=async (req,res,next)=>{
    let queryParams=req.query;
    let searchCriteria={
        name:queryParams.name,
        city:queryParams.destination,
        priceFrom:queryParams.priceFrom,
        priceTo:queryParams.priceTo,
        fromDate:GeneralUtilities.getDateObjectFromString(queryParams.availablefromDate),
        toDate:GeneralUtilities.getDateObjectFromString(queryParams.availabletoDate)
    };

    let sortCriteria={
        name:queryParams.sortByName,
        nameSortOrder:queryParams.nameSortOrder,
        price:queryParams.sortByPrice,
        priceSortOrder:queryParams.priceSortOrder
    };

    try{
        let response=await InventoryServices.InventorySearchService(searchCriteria,sortCriteria);
        res.status(200).json(response);
    }catch(err){
        next(err);
    }
};