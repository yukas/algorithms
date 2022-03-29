import findCeiling from "./find_ceiling";

describe("Find ceiling of a number in array", () => {
  describe("when number exists in array", () => {
    it("returns the found number", () => {
      expect(findCeiling([1, 2, 3], 2.0)).toBe(2);
    });
  });

  describe("when ceiling number exists", () => {
    it("returns ceiling number", () => {
      expect(findCeiling([1, 2, 3], 1.1)).toBe(2);
    });
  });

  describe("when ceiling number doesn't exist", () => {
    it("returns null", () => {
      expect(findCeiling([1, 2, 3], 3.1)).toBe(null);
    });
  });

  describe("when number is negative", () => {
    it("returns null", () => {
      expect(findCeiling([1, 2, 3], -1)).toBe(1);
    });
  });
});
