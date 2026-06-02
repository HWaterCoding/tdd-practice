import encode from "./caesar-cypher.js";

//first test to shift string by 3
test("shifts ABC by 3", () => {
    expect(encode("ABC", 3)).toBe("DEF");
});

//second test to test for any number input working
test("check if any number input for `amount` variable works", ()=>{
    expect(encode("ABC", 10)).toBe("KLM");
});

//third test to wrap the alphabet
test("wraps around alphabet", () => {
    expect(encode("XYZ", 3)).toBe("ABC");
});


//fourth test to reject non-strings
test("rejects non-string input", () => {
    expect(() => encode(123, 3)).toThrow();
});

//fifth test to accept negative numbers?
test("accepts negative numbers for the amount variable (meaning it can encode backwards)", ()=>{
    expect(encode("DEF", -3)).toBe("ABC");
});

//additional test to test case-sensitivity
test("handles case-sensitivity", ()=>{
    expect(encode("xyz", 14)).toBe("lmn");
})

//test to test working with extremely large numbers
test("works with large shift values", ()=>{
    expect(encode("abc", 1000)).toBe("mno");
});