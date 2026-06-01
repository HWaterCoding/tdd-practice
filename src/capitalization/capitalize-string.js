export default function capitalizeString(string) {
  if (typeof string !== "string") {
    throw new Error("Must be a string");
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
