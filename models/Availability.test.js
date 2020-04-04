const Availability=require('../models/Availability');

describe("testing Availability Class",()=>{

    let anAvailabilityJson={
        from:"25-2-2020",
        to:"20-5-2020"
    }

    test("testing constructor function",()=>{
        expect(new Availability()).toBeInstanceOf(Availability);
    });

    test("testing mapJson function",()=>{
        let tempAvailability=new Availability();
        tempAvailability.mapJson(anAvailabilityJson);
        expect(tempAvailability).toMatchObject({
            "from": new Date("2020-2-25"),
            "to": new Date("2020-5-20")
        });
    });

    describe("testing isAvailableAt function",()=>{

        let tempAvailability=new Availability();
        tempAvailability.mapJson(anAvailabilityJson);

        test("case 1",()=>{
            expect(tempAvailability.isAvailableAt("2020-3-25","2020-4-20")).toBeTruthy();
        });
    
        test("case 2",()=>{
            expect(tempAvailability.isAvailableAt("2020-1-25","2020-4-20")).toBeFalsy();
        });

        test("case 3",()=>{
            expect(tempAvailability.isAvailableAt("2020-4-20","2020-6-14")).toBeFalsy();
        });
    });

});