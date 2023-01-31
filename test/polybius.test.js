// // Write your tests here!
// const { expect, should } = require("chai");
// const { polybius } = require("../src/polybius");

// describe("polybius", () =>{
//     describe("error handling", () => {
//         it("should return false if the message to decode is not even", () => {
//             const input = "44324233521254134";

//             const actual = polybius(input, false)

//             expect(actual).to.be.false;
//         });

//         it("should return false if the message to decode is not even excluding spaces", () => {
//             const input = "4432 4233521254134";

//             const actual = polybius(input, false)

//             expect(actual).to.be.false;
//         });
//     describe("encoding", () => {
//         it("should return the encoded message as a string", () => {
//             const input = "thinkful";
            
//             const actual = polybius(input)

//             expect(actual).to.be.string;
//         });
        
//         it("should encode a message", () => {
//             const input = "thinkful";
//             const expected = "4432423352125413";
            
//             const actual = polybius(input)

//             expect(actual).to.equal(expected);
//             console.log(`encoding: ${input} gave ${actual}`)
//         });

//         it("should encode a message with spaces and capital letters", () => {
//             const input = "Hello world";
//             const expected = "3251131343 2543241341";
            
//             const actual = polybius(input)

//             expect(actual).to.equal(expected);
//             console.log(`encoding: ${input} gave ${actual}`)
//         });
//     });
    
//     describe("decoding", () => {
//         it("should decode a message with spaces", () => {
//             const input = "3251131343 2543241341";
//             const expected = "hello world";

//             const actual = polybius(input, false);

//             expect(actual).to.equal(expected);
//             console.log(`decoding: ${input} gave ${actual}`)
//         });

//         it("should decode a message with i or j", () => {
//             const input = "4432423352125413";
//             const expected = "thi/jnkful";

//             const actual = polybius(input, false);

//             expect(actual).to.equal(expected);
//             console.log(`decoding: ${input} gave ${actual}`)
//         });
//     })
//     })
// })