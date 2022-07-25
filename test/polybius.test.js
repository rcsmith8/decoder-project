// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should encode 'rob' to 244321 ", () => {
      expect(polybius("rob")).to.equal("244321");
    });

    it("should maintain spaces", () => {
      expect(polybius("rob smith")).to.equal("244321 3423424432");
    });
    it("should ignore capital letters", () => {
      expect(polybius("ROB")).to.equal("244321");
    });
  });
  describe("decoding", () => {
    it("should decode 244321 to rob", () => {
      expect(polybius("244321", false)).to.eql("rob");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius("244321", false)).to.eql(
        "rob"
      );
    });
    it("should maintain spaces", () => {
      expect(polybius("2443 21", false)).to.eql("ro b");
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("245", false)).to.be.false;
    });
  });
});
