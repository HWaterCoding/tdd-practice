import { calculator } from "./calculator.js";

//First test to test the addition function in the object
test("Take two numbers and sum them", () => {
  expect(calculator.add(3, 2)).toBe(5);
});

//Second test to test the subtraction function in the object
test("Take two numbers and subtract them", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

//Third test to test the multiplication function in the object
test("Take two numbers and multiply them", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

//Fourth test to test the division function in the object
test("Take two numbers and divide them", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
