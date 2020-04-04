module.exports.createInstanceAndMap=(instanceClass,jsonData)=>{
    let instance=null;
    if(instanceClass&&jsonData)
    {
        instance=new instanceClass();
        instance.mapJson(jsonData);
    }

    return instance;
}