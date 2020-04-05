/**
 * @param {type} valueType The type of values it can be Number or Date 
 * @param {any} rangeStarting first element the a range
 * @param {any} value element you want check being inclusive in the range
 * @param {any} rangeEnding last element in the a range
 */
module.exports.isValueInRange = (valueType,rangeStarting,value,rangeEnding) =>
{
    let tempRangeStarting=new valueType(rangeStarting);
    let tempValue=new valueType(value);
    let tempRangeEnding=new valueType(rangeEnding);

    return ( tempRangeStarting <= tempValue && tempValue <= tempRangeEnding );
}

/**
 * @param {type} valueType The type of values it can be Number or Date 
 * @param {any} outerRangeStarting first element in the outer range
 * @param {any} innerRangeStarting first element in the inner range
 * @param {any} innerRangeEnding last element in the inner range
 * @param {any} outerRangeEnding last element in the outer range
 */
module.exports.isRangeInRange = (valueType,outerRangeStarting,innerRangeStarting,innerRangeEnding,outerRangeEnding) =>
{
    return ( this.isValueInRange(valueType,outerRangeStarting,
            innerRangeStarting,outerRangeEnding) ) && 
        ( this.isValueInRange(valueType,outerRangeStarting,
            innerRangeEnding,outerRangeEnding) );
}

/**
 * @param {array} array the array to be copied
 * @returns {array} a newly created array having its members referencing copied array objects
 */
module.exports.arrayCopy = (array) =>
{
    let copy=[];
    array.forEach(element => {
        copy.push(element);
    });
    return copy;
}

let sortHelper = (sortKey, keyType,sortType, firstObj, secondObj ) =>{
    let sortTypeMultiplier=( sortType == "desc" )? (-1) : (1) ;

    let firstValue=new keyType( firstObj[sortKey] );
    let secondValue=new keyType( secondObj[sortKey] );

    return sortTypeMultiplier * ( firstValue < secondValue ? (-1) : ( firstValue == secondValue ? (0) : (1) ) );
}

/**
 * @param {array} array The array Of Objects To be Sorted
 * @param {string} sortKey The key inside the objects to sort by
 * @param {type} keyType The type of values inside that sort key Number, String, Date, Object, ...
 * @param {string} sortType The sorting direction asc,desc default asc 
 */
module.exports.sortArrayOfObjects = (array, sortKey, keyType , sortType) =>{
    return array.sort( sortHelper.bind ( this , sortKey , keyType,sortType ) );
}

module.exports.customError=(errorCode,status)=>
{
  let tempError=new Error();
  tempError.customCode=errorCode;
  tempError.status=status;
  return tempError;
}

module.exports.dateToYMDFormat= (date) =>
{
    let splittedDate=date.split('-');
    let day=splittedDate[0]
    let month=splittedDate[1];
    let year=splittedDate[2];
    return (year+"-"+month+"-"+day);
}

module.exports.isDateDMYFormat=(date)=>
{
    let splittedDate=date.split('-');
    return ( splittedDate[0]<=31 && splittedDate[1]<=12 )
}

module.exports.getHotelsFake=async () =>{
    return newPromise=new Promise((resolve,reject)=>{
        let randomDelay=(Math.random()*500);
        setTimeout(err=>{
            if(!err){
                resolve(require('../fakeData.json'));
            }
            else{
                reject(err);
            }
        },randomDelay);
    });
}

/**
 * @param {string} date a string representing a date in Day-Month-Year or Year-Month-Day formats
 * @return {date} a javascript date object
 */
module.exports.getDateObjectFromString = (date)=>
{
    if( this.isDateDMYFormat(date) )
    {
        date=this.dateToYMDFormat(date);
    }
    return (new Date(date));
}