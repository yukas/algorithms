import closest_number from "./closest_number";

describe("Find closest number", () => {
  test("when middle is subject, returns middle", () => {
    expect(closest_number([1, 3, 4], 3)).toBe(3);
  });

  test("when closest left, returns closest", () => {
    expect(closest_number([1, 4, 5], 2)).toBe(1);
  });

  test("when closest right, returns closest", () => {
    expect(closest_number([1, 2, 5], 4)).toBe(5);
  });

  test("when closest right, returns closest", () => {
    expect(closest_number([1, 3], 2)).toBe(1);
  });

  test("when closest is out of bounds, returns closest", () => {
    expect(closest_number([1, 3], 5)).toBe(3);
  });
});
