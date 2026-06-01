export default function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Must be a string to reverse");
  }
  return string.split("").reverse().join("").toLowerCase();
}
