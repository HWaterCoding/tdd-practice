import encode from "./caesar-cypher.js";


//first test to test for string shifting
test("shifts a normal string by the appropriate amount", ()=>{
    expect(encode("ABC", 3)).toBe("DEF");
});


//second test to test for any number input working
test("check if any number input for `amount` variable works", ()=>{
    expect(encode("ABC", 10)).toBe("KLM");
});


//third test to only accept letters/numbers in the code
test("only accepts letters as input", ()=>{
    expect(encode(3, 10)).toThrow();
});


//fourth test to accept negative numbers?
test("accepts negative numbers for the amount variable (meaning it can encode backwards)", ()=>{
    expect(encode("DEF", 3)).toBe("ABC");
});


//fifth test to test that strings properly wrap to the start of the alphabet
test("letters wrap to beginning of alphabet if they go past z", ()=>{
    expect(encode("XYZ", 3)).toBe("ABC");
});


//sixth test to test for case-sensitive cases
test("all strings are converted to uppercase", ()=>{
    expect(encode("abc", 3)).toBe("DEF");
});