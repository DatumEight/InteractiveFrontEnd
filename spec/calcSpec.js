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
describe ("whatCanIDrink", function(){
    it("should return Sorry. I can't tell what drink because that age is incorrect!", function(){
        expect(whatCanIDrink(0)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
    });
       it("should return Drink Toddy", function(){
        expect(whatCanIDrink(8)).toBe("Drink Toddy");
    });
       it("should return Drink Coke", function(){
        expect(whatCanIDrink(16)).toBe("Drink Coke");
    });
       it("should return Drink Beer", function(){
        expect(whatCanIDrink(20)).toBe("Drink Beer");
    });
       it("should return Drink Whiskey", function(){
        expect(whatCanIDrink(25)).toBe("Drink Whiskey");
    });
});