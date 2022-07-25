// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should be a function", () => {
    expect(substitution).to.be.a("function");
  });

  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      let alphabet = undefined;
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      let alphabet = "short";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      let alphabet = "abcabcabcabcabcabcabcabcyz";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      let alphabet = "pqowieurtylaksjdhfgmznxbcv";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("mrtsleza");
    });
    it("should work with any kind of key with unique characters", () => {
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let input = "letter";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("c&jj&b");
    });
    it("should preserve spaces", () => {
      let alphabet = "pqowieurtylaksjdhfgmznxbcv";
      let input = "Life is good";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("atei tg ujjw");
    });
    it("should ignore capital letters", () => {
      let alphabet = "pqowieurtylaksjdhfgmznxbcv";
      let input = "ThiNkFul";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("mrtsleza");
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      let alphabet = "pqowieurtylaksjdhfgmznxbcv";
      let input = "mrtsleza";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should work with any kind of key with unique characters", () => {
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let input = "c&jj&b";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("letter");
    });
    it("should preserve spaces", () => {
      let alphabet = "pqowieurtylaksjdhfgmznxbcv";
      let input = "atei tg ujjw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("life is good");
    });
    it("should ignore capital letters", () => {
      let alphabet = "pqowieurtylaksjdhfgmznxbcv";
      let input = "mRtSlEzA";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
  });
});