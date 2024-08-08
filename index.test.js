import StringCalculator from "."

test('return 0 for empty string', () => {
    let sc = new StringCalculator();
    expect(sc.Add("")).toBe(0);
  });
  
  test('return number when only one number provided', () => {
    let sc = new StringCalculator();
    expect(sc.Add("2")).toBe(2)
  });

  test('sum of two numbers', () => {
    let sc = new StringCalculator()
    expect(sc.Add("1,2")).toBe(3)
  });

  test('sum of any amount of numbers separataeted by coma', () => {
    let sc = new StringCalculator()
    expect(sc.Add("1,2,3,4,5")).toBe(15)
  });

  test('new line between numbers', () => {
    let sc = new StringCalculator()
    expect(sc.Add("1\n2,3")).toBe(6)
  });

  test('supports different delimiters', () => {
    let sc = new StringCalculator()
    expect(sc.Add("//;\n1;2")).toBe(3)
  });

  test('throws an exception when negative numbers', () => {
    let sc = new StringCalculator()
    expect(() => sc.Add("1,-2,3,-4")).toThrow("negatives not allowed: -2, -4")
  });

  test('ignores numbers greater than 1000', () => {
    let sc = new StringCalculator()
    expect(sc.Add("2,1001")).toBe(2)
  });

  