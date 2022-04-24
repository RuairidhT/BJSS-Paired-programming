const calculateTax = require('./taxCalc');

test("Calculates the amount of LBTT payable when buying a residential property less than £145,000", () => {
    expect(calculateTax(0)).toBe(0);
});

test("Calculates the amount of LBTT payable when buying a residential property between £145,001 - £250,000", () => {
    expect(calculateTax(146000)).toBe(20);
});

test("Calculates the amount of LBTT payable when buying a residential property between £250,001 - £325,000", () => {
    expect(calculateTax(251000)).toBe(2150);
});

test("Calculates the amount of LBTT payable when buying a residential property between £325,001 - £750,000 ", () => {
    expect(calculateTax(500000)).toBe(23350);

});

test("Calculates the amount of LBTT payable when buying a residential property over £750,000", () => {
    expect(calculateTax(1000000)).toBe(78350);
});

test("Catches errors where user enters number less than 0", () => {
    expect(calculateTax(-100)).toBe(-1);
});

test("Catches errors where user enters NaN", () => {
    expect(calculateTax("aaaaa")).toBe(-1);
});