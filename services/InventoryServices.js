const Inventory = require('../models/Inventory');

module.exports.InventorySearchService=async (searchCriteria,sortCriteria)=>
{
    let inventory=new Inventory();
    await inventory.retrieveData();

    let filteredSortedHotels=[];

    filteredSortedHotels=inventory.search(searchCriteria.name,searchCriteria.city,
        searchCriteria.priceFrom,searchCriteria.priceTo,searchCriteria.fromDate,searchCriteria.toDate);

    filteredSortedHotels=inventory.sort(filteredSortedHotels,sortCriteria.name,sortCriteria.nameSortOrder,sortCriteria.price,
        sortCriteria.priceSortOrder);

    return filteredSortedHotels;
}