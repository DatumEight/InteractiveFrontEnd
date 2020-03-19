describe ("Calculator", function (){
    describe("Addition tests", function(){
        it ("should return 42", function(){
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we dont supply two numbers", function(){
            spyOn(window, "alert");
            addition("hitchhikers" , "guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

describe ("fizzBuzz", function(){
    it("should return fizzBuzz", function(){
       expect(fizzBuzz(15)).toBe("fizzBuzz");
    });
    it("should return fizz", function(){
       expect(fizzBuzz(6)).toBe("fizz");
    });
    it("should return buzz", function(){
       expect(fizzBuzz(20)).toBe("buzz");
    });
});