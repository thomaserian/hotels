const Hotel=require('../models/Hotel');
const fakeData=require('../fakeData.json');

describe("testing Availability Class",()=>{

    let anHotelJson=fakeData.hotels[0];

    test("testing constructor",()=>{
        expect(new Hotel()).toBeInstanceOf(Hotel);
    });

    describe("testing isMatchingCriteria function",()=>{

        let tempHotel=new Hotel();
        tempHotel.mapJson(anHotelJson);

        test("is Matching name",()=>{
            expect(tempHotel.isMatchingCriteria("Media One Hotel",null,null,null,null,null,null)).toBeTruthy();
        });
    
        test("is Matching name",()=>{
            expect(tempHotel.isMatchingCriteria("Thomas Hotel",null,null,null,null,null)).toBeFalsy();
        });

        test("is Matching city",()=>{
            expect(tempHotel.isMatchingCriteria(null,"dubai",null,null,null,null)).toBeTruthy();
        });
    
        test("is Matching city",()=>{
            expect(tempHotel.isMatchingCriteria(null,"cairo",null,null,null,null)).toBeFalsy();
        });

        test("is Matching price",()=>{
            expect(tempHotel.isMatchingCriteria(null,null,100,200,null,null)).toBeTruthy();
        });
    
        test("is Matching price",()=>{
            expect(tempHotel.isMatchingCriteria(null,null,50,100,null,null)).toBeFalsy();
        });

        test("is Matching dates",()=>{
            expect(tempHotel.isMatchingCriteria(null,null,null,null,"2020-10-11","2020-10-14")).toBeTruthy();
        });
    
        test("is Matching dates",()=>{
            expect(tempHotel.isMatchingCriteria(null,null,null,null,"2020-04-11","2020-04-14")).toBeFalsy();
        });

        test("is perfect Matching",()=>{
            expect(tempHotel.isMatchingCriteria("Media One Hotel","dubai",100,200,"2020-10-11","2020-10-14")).toBeTruthy();
        });

        test("is perfect Matching",()=>{
            expect(tempHotel.isMatchingCriteria("Media One Hotel","cairo",100,200,"2020-10-11","2020-10-14")).toBeFalsy();
        });
    });

});