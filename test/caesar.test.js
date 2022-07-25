// Write your tests here!
const { caesar }  = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () =>  {
  let input = "My name is Rob";
  let shift = 10;
  
  it("is a function", () => {
    expect(caesar).to.be.a("function");
  });
  
  it("returns false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
     return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });
  
   it("returns a result for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });
  
   describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar(input, shift);
      expect(actual).to.equal(expected);
      });
    
     it("encodes '*My name is Rob!' shift+1 correctly", () => {
      input = "*My name is Rob!";
      shift = 1;
      const expected = "*nz obnf jt spc!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
      it("encodes '*My name is Rob!' shift-1 correctly", () => {
      input = "*My name is Rob!";
      shift = -1;
      const expected = "*lx mzld hr qna!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });
  describe("decoding a message", () =>  {
    it("decodes '*nz obnf jt spc!' shift -1 correctly", () => {
      input = "*nz obnf jt spc!";
      shift = -1;
      const expected = "*my name is rob!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
   it("decodes '*lx mzld hr qna!' shift +1 correctly", () => {
    input = "*lx mzld hr qna!";
     shift = 1;
     const expected = "*my name is rob!";
     const actual = caesar(input,shift);
     expect(actual).to.deep.equal(expected);
   });
  });
});