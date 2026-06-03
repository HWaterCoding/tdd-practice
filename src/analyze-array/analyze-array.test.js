import analyzeArray from "./analyze-array.js";

//tests to test working with different numbers, including negatives
test("function accepts an array and returns a simple object", ()=>{
    expect(analyzeArray([1, 2, 3, 4, 5]))
    .toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
})

test("works with different numbers", ()=>{
    expect(analyzeArray([10, 20, 30]))
    .toEqual({
        average: 20,
        min: 10,
        max: 30,
        length: 3
    });
});

test("works with negative numbers", ()=>{
    expect(analyzeArray([-2, -4, -6]))
        .toEqual({
            average: -4,
            min: -6,
            max: -2,
            length: 3
        });
});


//Individual tests to return all 4 object properties
test("finds the average", ()=>{
    expect(analyzeArray([2, 4, 6]).average).toBe(4);
});

test("finds the minimum", ()=>{
    expect(analyzeArray([8, 4, 10]).min).toBe(4);
});

test("finds the maximum", ()=>{
    expect(analyzeArray([8, 4, 10]).max).toBe(10);
});

test("finds the length", ()=>{
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
});


//testing of errors on input if array is empty
test("rejects empty arrays", () => {
    expect(() => analyzeArray([]))
        .toThrow("Please enter at least one number");
});


test("Calls with only one number will work", ()=>{
    expect(analyzeArray([5]))
    .toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
})