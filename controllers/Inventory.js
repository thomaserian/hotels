const InventoryServices=require('../services/InventoryServices');
const GeneralUtilities=require('../utils/GeneralUtilities');

module.exports.InventorySearchController=async (req,res,next)=>{
    let queryParams=req.query;

    let availableFromDate=queryParams.availableFromDate ?
     GeneralUtilities.getDateObjectFromString(queryParams.availableFromDate) : null;

    let availabletoDate=queryParams.availableToDate ?
     GeneralUtilities.getDateObjectFromString(queryParams.availableToDate) : null;

    let searchCriteria={
        name:queryParams.name,
        city:queryParams.destination,
        priceFrom:queryParams.priceFrom,
        priceTo:queryParams.priceTo,
        fromDate:availableFromDate,
        toDate:availabletoDate
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