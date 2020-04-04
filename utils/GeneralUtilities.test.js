const GeneralUtilities=require('./GeneralUtilities');

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

    let originalArray = [
        { "name": "thomas", "id": 7, "date": "2020-1-25" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "victor", "id": 5, "date": "2020-4-5" },
        { "name": "fady", "id": 2, "date": "2020-5-6" },
        { "name": "erian", "id": 1, "date": "2019-6-7" },
        { "name": "abanoub", "id": 4, "date": "2016-3-23" }
    ];

    let expectedCase1 = [
        { "name": "abanoub", "id": 4, "date": "2016-3-23" },
        { "name": "erian", "id": 1, "date": "2019-6-7" },
        { "name": "fady", "id": 2, "date": "2020-5-6" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "thomas", "id": 7, "date": "2020-1-25" },
        { "name": "victor", "id": 5, "date": "2020-4-5" }
    ];

    test("case 1 sort by name asc ",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(originalArray,"name",String,"asc")).toEqual(expectedCase1);
    });

    let expectedCase2 = [
        { "name": "victor", "id": 5, "date": "2020-4-5" },
        { "name": "thomas", "id": 7, "date": "2020-1-25" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "fady", "id": 2, "date": "2020-5-6" },
        { "name": "erian", "id": 1, "date": "2019-6-7" },
        { "name": "abanoub", "id": 4, "date": "2016-3-23" }
    ];

    test("case 2 sort by name desc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(originalArray,"name",String,"desc")).toEqual(expectedCase2);
    });

    let expectedCase3 = [
        { "name": "erian", "id": 1, "date": "2019-6-7" },
        { "name": "fady", "id": 2, "date": "2020-5-6" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "abanoub", "id": 4, "date": "2016-3-23" },
        { "name": "victor", "id": 5, "date": "2020-4-5" },
        { "name": "thomas", "id": 7, "date": "2020-1-25" }
    ];

    test("case 3 sort by id asc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(originalArray,"id",Number,"asc")).toEqual(expectedCase3);
    });

    let expectedCase4 = [
        { "name": "thomas", "id": 7, "date": "2020-1-25" },
        { "name": "victor", "id": 5, "date": "2020-4-5" },
        { "name": "abanoub", "id": 4, "date": "2016-3-23" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "fady", "id": 2, "date": "2020-5-6" },
        { "name": "erian", "id": 1, "date": "2019-6-7" }
    ];

    test("case 4 sort by id desc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(originalArray,"id",Number,"desc")).toEqual(expectedCase4);
    });

    let expectedCase5 = [
        { "name": "abanoub", "id": 4, "date": "2016-3-23" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "erian", "id": 1, "date": "2019-6-7" },
        { "name": "thomas", "id": 7, "date": "2020-1-25" },
        { "name": "victor", "id": 5, "date": "2020-4-5" },
        { "name": "fady", "id": 2, "date": "2020-5-6" }
    ];

    test("case 5 sort by date asc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(originalArray,"date",Date,"asc")).toEqual(expectedCase5);
    });

    let expectedCase6 = [
        { "name": "fady", "id": 2, "date": "2020-5-6" },
        { "name": "victor", "id": 5, "date": "2020-4-5" },
        { "name": "thomas", "id": 7, "date": "2020-1-25" },
        { "name": "erian", "id": 1, "date": "2019-6-7" },
        { "name": "maher", "id": 3, "date": "2018-2-8" },
        { "name": "abanoub", "id": 4, "date": "2016-3-23" }
    ];
    test("case 6 sort by date asc",()=>{
        expect(GeneralUtilities.sortArrayOfObjects(originalArray,"date",Date,"desc")).toEqual(expectedCase6);
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