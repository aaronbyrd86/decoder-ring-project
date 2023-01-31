// // Write your tests here!
// const { expect } = require("chai");
// const { caesar } = require("../src/caesar");

// describe("caesar", () => {
//   describe("error handling", () => {
//     it("should return false when shift is 0", () => {
//       const input = "thinkful";
//       const shift = 0;

//       const actual = caesar(input, shift);

//       expect(actual).to.be.false;
//     });

//     it("should return false when no shift value is supplied", () => {
//       const input = "thinkful";

//       const actual = caesar(input);

//       expect(actual).to.be.false;
//     });

//     it("should return false when shift value is greater than 25", () => {
//       const input = "thinkful";
//       const shift = 26;

//       const actual = caesar(input, shift);

//       expect(actual).to.be.false;
//     });

//     it("should return false when shift value is less than -25", () => {
//       const input = "thinkful";
//       const shift = -26;

//       const actual = caesar(input, shift);

//       expect(actual).to.be.false;
//     });
//   });

//   describe("encoding", () => {
//     it("should encode a message with a positive shift value", () => {
//       const input = "thinkful";
//       const shift = 3;

//       const expected = "wklqnixo";

//       const actual = caesar(input, shift);

//       expect(actual).to.equal(expected);

//       console.log(
//         `****input was: ${input} encoding with shift value: ${shift} gave: ${actual}****`
//       );
//     });

//     it("should encode a message with a negative shift value", () => {
//       const input = "thinkful";
//       const shift = -3;

//       const expected = "qefkhcri";

//       const actual = caesar(input, shift);

//       expect(actual).to.equal(expected);

//       console.log(
//         `****input was: ${input} encoding with shift value: ${shift} gave: ${actual}****`
//       );
//     });

//     it("should encode a message with spaces and special characters", () => {
//       const input = "This is a secret message!";
//       const shift = 8;

//       const expected = "bpqa qa i amkzmb umaaiom!";

//       const actual = caesar(input, shift);

//       expect(actual).to.equal(expected);

//       console.log(
//         `****input was: ${input} encoding with shift value: ${shift} gave: ${actual}****`
//       );
//     });
//   });

//   describe("decoding", () => {
//     it("should decode a message with a positive shift value", () => {
//       const input = "wklqnixo";
//       const shift = 3;

//       const expected = "thinkful";

//       const actual = caesar(input, shift, false);

//       expect(actual).to.equal(expected);

//       console.log(
//         `****input was: ${input} decoding with shift value: ${shift} gave: ${actual}****`
//       );
//     });

//     it("should decode a message with a negative shift value", () => {
//       const input = "qefkhcri";
//       const shift = -3;

//       const expected = "thinkful";

//       const actual = caesar(input, shift, false);

//       expect(actual).to.equal(expected);

//       console.log(
//         `****input was: ${input} decoding with shift value: ${shift} gave: ${actual}****`
//       );
//     });

//     it("should decode a message with spaces and special characters", () => {
//       const input = "BPQA qa I amkzmb umaaiom!";
//       const shift = 8;

//       const expected = "this is a secret message!";

//       const actual = caesar(input, shift, false);

//       expect(actual).to.equal(expected);

//       console.log(
//         `****input was: ${input} decoding with shift value: ${shift} gave: ${actual}****`
//       );
//     });
//   });
// });
