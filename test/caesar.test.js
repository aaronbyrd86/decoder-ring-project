// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false when bad input is given", () => {
        const input = "thinkful";
        const shift = 0;

        const expected = false;

        const actual = caesar(input, shift)
    })
})