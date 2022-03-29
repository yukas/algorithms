import binarySearch from "./binary_search";

describe("Binary search", () => {
  describe("when number exists in array", () => {
    it.each([
      [[1, 2, 3], 1, 1],
      [[1, 2, 3], 2, 2],
      [[1, 2, 3], 3, 3],
      [[1, null, 3], null, null],
    ])("given %p finds %p", (arr, num, expected) => {
      expect(binarySearch(arr, num)).toBe(expected);
    });
  });

  describe("when number doesn't exist", () => {
    it("returns null", () => {
      expect(binarySearch([1, 2, 3], 4)).toBe(null);
    });

    it("returns null", () => {
      expect(binarySearch([1, 2, 3], null)).toBe(null);
    });
  });

  describe("when empty array", () => {
    it("returns null", () => {
      expect(binarySearch([], 4)).toBe(null);
    });
  });

  describe("when no array given", () => {
    it("raises an error", () => {
      expect(() => binarySearch(null, 4)).toThrow("No array given");
    });
  });
});
