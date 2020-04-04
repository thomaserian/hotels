const GeneralUtilities=require('./GeneralUtilities');
const testData=require('../testData.json');

describe("testing isValueInRange function", () => {

    test("testing the existance of the function", () => {
        expect(GeneralUtilities.isValueInRange).toBeDefined();
    });

    test("case 1",()=>{
        expect(GeneralUtilities.isValueInRange(Number,100,99,200)).toBeFalsy();
    });

    test("case 2",()=>{
        expect(GeneralUtilities.isValueInRange(Number,100,100,200)).toBeTruthy();
    });

    test("case 3",()=>{
        expect(GeneralUtilities.isValueInRange(Number,100,150,200)).toBeTruthy();
    });

    test("case 4",()=>{
        expect(GeneralUtilities.isValueInRange(Number,100,200,200)).toBeTruthy();
    });

    test("case 5",()=>{
        expect(GeneralUtilities.isValueInRange(Number,100,201,200)).toBeFalsy();
    });
});

describe("testing isRangeInRange function",()=>{

    test("testing the existance of the function",()=>{
        expect(GeneralUtilities.isRangeInRange).toBeDefined();
    });

    test("case 1",()=>{
        expect(GeneralUtilities.isRangeInRange(Date,"2020-5-1","2020-4-30","2020-5-20","2020-8-1")).toBeFalsy();
    });

    test("case 2",()=>{
        expect(GeneralUtilities.isRangeInRange(Date,"2020-5-1","2020-5-1","2020-8-1","2020-8-1")).toBeTruthy();
    });

    test("case 3",()=>{
        expect(GeneralUtilities.isRangeInRange(Date,"2020-5-1","2020-6-20","2020-7-15","2020-8-1")).toBeTruthy();
    });

    test("case 4",()=>{
        expect(GeneralUtilities.isRangeInRange(Date,"2020-5-1","2020-4-29","2020-9-1","2020-8-1")).toBeFalsy();
    });

    test("case 5",()=>{
        expect(GeneralUtilities.isRangeInRange(Date,"2020-5-1","2020-6-1","2020-8-2","2020-8-1")).toBeFalsy();
    });
});

describe("testing arrayCopy function",()=>{

    test("testing the existance of the function",()=>{
        expect(GeneralUtilities.arrayCopy).toBeDefined();
    });

    let tempArray=[{"id":"1","name":"thomas"},{"id":"2","name":"maher"}];
    let copiedArray=GeneralUtilities.arrayCopy(tempArray);

    test("case 1",()=>{
        expect(copiedArray).not.toBe(tempArray);
    });

    test("case 2",()=>{
        expect(copiedArray).toEqual(tempArray);
    });

});

describe("testing sortArrayOfObjects function",()=>{

    test("testing the existance of the function",()=>{
        expect(GeneralUtilities.sortArrayOfObjects).toBeDefined();
    });

    test("case 1 sort by name asc ",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(testData.originalArray,"name",String,"asc")).toEqual(testData.sortByNameAsc);
    });

    test("case 2 sort by name desc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(testData.originalArray,"name",String,"desc")).toEqual(testData.sortByNameDesc);
    });

    test("case 3 sort by id asc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(testData.originalArray,"id",Number,"asc")).toEqual(testData.sortByIdAsc);
    });

    test("case 4 sort by id desc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(testData.originalArray,"id",Number,"desc")).toEqual(testData.sortByIdDesc);
    });

    test("case 5 sort by date asc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(testData.originalArray,"date",Date,"asc")).toEqual(testData.sortByDateAsc);
    });

    test("case 6 sort by date desc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(testData.originalArray,"date",Date,"desc")).toEqual(testData.sortByDateDesc);
    });
});

describe("testing dateToYMDFormat function",()=>{

    test("testing the existance of the function",()=>{
        expect(GeneralUtilities.dateToYMDFormat).toBeDefined();
    });

    test("case 1",()=>{
        expect(GeneralUtilities.dateToYMDFormat("20-5-2020")).toBe("2020-5-20")
    });
});

describe("testing isDateDMYFormat function",()=>{

    test("testing the existance of the function",()=>{
        expect(GeneralUtilities.isDateDMYFormat).toBeDefined();
    });

    test("case 1",()=>{
        expect(GeneralUtilities.isDateDMYFormat("20-5-2020")).toBeTruthy();
    });

    test("case 2",()=>{
        expect(GeneralUtilities.isDateDMYFormat("2020-5-20")).toBeFalsy();
    });
});

describe("testing is getDateObjectFromString function",()=>{

    test("testing the existance of the function",()=>{
        expect(GeneralUtilities.getDateObjectFromString).toBeDefined();
    });

    test("case Day-Month-Year",()=>{
        expect(GeneralUtilities.getDateObjectFromString("20-5-2020")).toStrictEqual(new Date("2020-5-20"));
    });

    test("case Year-Day-Month",()=>{
        expect(GeneralUtilities.getDateObjectFromString("2020-5-20")).toStrictEqual(new Date("2020-5-20"));
    });
});

test("testing getHotelsFake function", async () => {
    expect.assertions(1);
    try {
        let data = await GeneralUtilities.getHotelsFake();
        expect(data).toBeDefined();
    } catch (err) {
        expect(err).toEqual({
            error: 'unable to get response',
        });
    }
});