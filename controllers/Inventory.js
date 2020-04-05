const InventoryServices=require('../services/InventoryServices');
const GeneralUtilities=require('../utils/GeneralUtilities');

module.exports.InventorySearchController=async (req,res,next)=>{
    let queryParams=req.query;

    let availableFromDate=queryParams.availableFromDate ?
     GeneralUtilities.getDateObjectFromString(queryParams.availableFromDate) : null;

    let availabletoDate=queryParams.availableToDate ?
     GeneralUtilities.getDateObjectFromString(queryParams.availableToDate) : null;

    let sortByName= queryParams.sortByName?Number(queryParams.sortByName): null;
    let sortByPrice= queryParams.sortByPrice?Number(queryParams.sortByPrice): null;

    let searchCriteria={
        name:queryParams.name,
        city:queryParams.destination,
        priceFrom:queryParams.priceFrom,
        priceTo:queryParams.priceTo,
        fromDate:availableFromDate,
        toDate:availabletoDate
    };

    let sortCriteria={
        sortByName:sortByName,
        nameSortOrder:queryParams.nameSortOrder,
        sortByPrice:sortByPrice,
        priceSortOrder:queryParams.priceSortOrder
    };

    try{
        let response=await InventoryServices.InventorySearchService(searchCriteria,sortCriteria);
        res.status(200).json(response);
    }catch(err){
        next(err);
    }
};