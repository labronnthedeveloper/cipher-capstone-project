const caesarModule = require("../src/caesar")
const expect = require("chai").expect;

// Write your tests here!

describe("Caesar Module - LaBronn", () => {
    describe("Error Handling", () => {       
        it("Should return FALSE, if the shift value passed in is 0.", () => {
            const shiftZero = 0; 
            const actual = caesarModule.caesar("Abcdefghijk", shiftZero, encode = true)
            expect(actual).to.equal(false)
        })
        it("Should return FALSE, if the shift value passed in is greater than 25.", () => {
            const shiftZero = 27; 
            const actual = caesarModule.caesar("Abcdefghijk", shiftZero, encode = true)
            expect(actual).to.equal(false)
        })
        it("Should return FALSE, if the shift value passed in is less than -25.", () => {
            const shiftZero = -30; 
            const actual = caesarModule.caesar("Abcdefghijk", shiftZero, encode = true)
            expect(actual).to.equal(false)
        })  
        it("Should return FALSE, if the shift value is not present", () => {
            const actual = caesarModule.caesar("Abcdefghijk")
            expect(actual).to.equal(false)
        }) 
    })
    describe("Encoding Handling", () => {
        it("Should ignore capital letters.", () => {
            const shiftZero = 3; 
            const actual = caesarModule.caesar("A message", shiftZero, encode = true)
            expect(actual).to.equal("d phvvdjh")
        })
        it("Should also shift to the left, if a negative number is passed in.", () => {
            const shiftZero = -3; 
            const actual = caesarModule.caesar("My message", shiftZero, encode = true)
            expect(actual).to.equal("jv jbppxdb")
        })
        it("Should wrap around the alphabet if the shift shifts letters past Z.", () => {
            const shiftZero = 2; 
            const actual = caesarModule.caesar("Zoology Is Fun", 2, true)
            expect(actual).to.equal("bqqnqia ku hwp")
        })
        it("Should maintain any and all spaces within the given string.", () => {
                const shiftZero = 2; 
                const actual = caesarModule.caesar("All Day And In Every Way", 3, true)
                expect(actual).to.equal("doo gdb dqg lq hyhub zdb")
        })
        it("Should maintain any special characters from inputted string.", () => {
            const actual = caesarModule.caesar("Wow!! You're #1, you win $100.", 5, true)
            expect(actual).to.equal("btb!! dtz'wj #1, dtz bns $100.")
    })
    })
    describe("Decoding Handling", () => {
        it("Should ignore capital letters.", () => {
            const actual = caesarModule.caesar("Jbppxdb", -3, encode = false)
            expect(actual).to.equal("message")
        })
        it("Should wrap around the alphabet if the shift shifts letters position goes beyond Z.", () => {
            const actual = caesarModule.caesar("xyz", -3, false)
            expect(actual).to.equal("abc")
        })
        it("Should maintain any and all spaces within the given string.", () => {
                const actual = caesarModule.caesar("doo gdb dqg lq hyhub zdb", 3, false)
                expect(actual).to.equal("all day and in every way")
        })
        it("Should maintain any special characters from inputted string.", () => {          
            const actual = caesarModule.caesar("btb!! dtz'wj #1, dtz bns $100.", 5, false)
            expect(actual).to.equal("wow!! you're #1, you win $100.")
    })
})
})
    

