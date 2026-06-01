import reverseString from "./reverse-string.js";

//First test to see if it properly reverses a string
test("Correctly reverses a string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

//Second test to handle case-sensitive strings
test("Handles case-sensitive strings", () => {
  expect(reverseString("StRiNg")).toBe("gnirts");
});

//Third test to reject anything that isn't a string
test("Only accepts strings, no numbers, etc.", () => {
  expect(() => reverseString(123)).toThrow();
});
