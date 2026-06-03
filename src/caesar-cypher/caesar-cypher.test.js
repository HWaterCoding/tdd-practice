import encode from "./caesar-cypher.js";

//first test to shift string by 3
test("shifts ABC by 3", () => {
    expect(encode("ABC", 3)).toBe("DEF");
});

//second test to test for any number input working
test("check if any number input for `amount` variable works", ()=>{
    expect(encode("ABC", 10)).toBe("KLM");
});

//test to test working with extremely large numbers
test("works with large shift values", ()=>{
    expect(encode("abc", 1000)).toBe("mno");
});

//fifth test to accept negative numbers?
test("accepts negative numbers for the amount variable (meaning it can encode backwards)", ()=>{
    expect(encode("abc", -3)).toBe("xyz");
});




//tests to handle wrapping, both negative and positive values
test("wraps around alphabet", () => {
    expect(encode("XYZ", 3)).toBe("ABC");
});

test("works with negative shift wrapping as well", ()=>{
    expect(encode("abc", -51)).toBe("bcd");
})




//tests for input handling cases
test("rejects non-string input", () => {
    expect(() => encode(123, 3)).toThrow();
});

test("handles case-sensitivity", ()=>{
    expect(encode("xyz", 14)).toBe("lmn");
});


//test to accept punctuation
test("handles non-letter characters properly", ()=>{
    expect(encode("Hello, World!", 3)).toBe("Khoor, Zruog!");
})