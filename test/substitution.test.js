// Write your tests here!
const { expect, should } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () =>{
    describe("error handling", () => {
        it("should return false if the alphabet is not exactly 26 characters", () => {
            const input = "thinkful";
            const alphabet = "short";

            const actual = substitution(input, alphabet);

            expect(actual).to.be.false;
        });

        it("should return false if the alphabet has duplicate characters", () => {
            const input = "thinkful";
            const alphabet = "abcabcabcabcabcabcabcabcyz";

            const actual = substitution(input, alphabet);

            expect(actual).to.be.false;
        });
    describe("encoding", () => {
        it("should encode the message", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = 'jrufscpw';
            
            const actual = substitution(input, alphabet);

            expect(actual).to.equal(expected);
        });
        
        it("should encode a message with spaces and capitals", () => {
            const input = "You are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = 'elp xhm xf mbymwwmfj dne';
            
            const actual = substitution(input, alphabet);

            expect(actual).to.equal(expected);
        });

        it("should encode a message with special characters", () => {
            const input = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = 'y&ii$r&';
            
            const actual = substitution(input, alphabet);

            expect(actual).to.equal(expected);
        });
    });
    
    describe("decoding", () => {
        it("should decode a message", () => {
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = 'thinkful';
            
            const actual = substitution(input, alphabet, false);

            expect(actual).to.equal(expected);
        });

        it("should decode a message with special characters", () => {
            const input = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = 'message';
            
            const actual = substitution(input, alphabet, false);

            expect(actual).to.equal(expected);
        });
    })
    })
})