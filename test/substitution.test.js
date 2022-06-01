// Write your tests here!
const substitutionModule = require("../src/substitution")
const expect = require('chai').expect

describe("Substitution Function - LaBronn", () => {
    describe("Error Handling", () => {
    it("should return false if the alphabet does not contain exactly 26 characters.", () => {
        let actual = substitutionModule.substitution("You shall not pass", "aaaaa")
        let expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if the alphabet characters are not unique.", () => {
        let actual = substitutionModule.substitution("You shall not pass", "aaart$uioaqsdfghjbbbwxcvbn");
        expect(actual).to.equal(false)
    })
})
describe("Encoding Handling", () => {
    it("correctly translates the given phrase, based on alphabet passed in", () => {
        let actual = substitutionModule.substitution("goodmorning", "plmoknijbuhvygctfxrdzeswaq")
        let expected = 'iccoycxgbgi'
        expect(actual).to.equal(expected)
    })
    it("maintains the spacing within the message", () => {
        let actual = substitutionModule.substitution("you shall not pass", "xoyqmcgrukswaflnthdjpzibev");
        let expected = "elp drxww flj nxdd"
        expect(actual).to.equal(expected)
    })
    it("it should ignore capital letters", () => {
        let actual = substitutionModule.substitution("ALL RISE FOR JUDY JUSTICE", "$wae&zrdxtfcygvuhbijnokmpl");
        let expected = "$cc bxi& zvb tnep tnijxa&"
        expect(actual).to.equal(expected)
    })
})
describe("Decoding Handling", () => {
    it("correctly translates the given phrase, back to using a traditional alphabet.", () => {
        let actual = substitutionModule.substitution("iccoycxgbgi", "plmoknijbuhvygctfxrdzeswaq", false)
        let expected = 'goodmorning'
        expect(actual).to.equal(expected)
    })
    it("maintains the spacing within the message when decoding.", () => {
        let actual = substitutionModule.substitution("elp drxww flj nxdd", "xoyqmcgrukswaflnthdjpzibev", false);
        let expected = "you shall not pass"
        expect(actual).to.equal(expected)
    })
})
})