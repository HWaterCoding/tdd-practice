import capitalizeString from "./capitalize-string";

// We expect the string passed into the function to return the first letter capitalized
test("First letter capitalized", ()=>{
    expect(capitalizeString("string")).toBe("String")
});

// We expect ONLY the first letter to be capitalized
test("All other letters lowercase", ()=>{
    expect(capitalizeString("sTRING")).toBe("String")
});

// We expect to work with single character
test("Works with a single character", ()=>{
    expect(capitalizeString("h")).toBe("H");
})

// We expect the function to only take a string as it's argument
test("Only strings allowed", ()=>{
    expect(() => capitalizeString(123)).toThrow()
});