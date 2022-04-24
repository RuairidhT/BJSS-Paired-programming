//Land and Buildings Transaction Tax (LBTT)

// https://www.moneyhelper.org.uk/en/homes/buying-a-home/use-our-land-and-buildings-transaction-tax-calculator-scotland
// Up to £145,000       = 0%
// £145,001 - £250,000  = 2%
// £250,001 - £325,000  = 5%
// £325,001 - £750,000  = 10%
// Over £750,000	      = 12%

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `\nWhat's the value of the property? (£): `,
  (propertyPrice) => {
    var tax = calculateTax(propertyPrice);
    console.log(`Land and Buildings Transaction Tax to pay is £${tax}\n`);
    readline.close();
  }
);

function calculateTax(propertyPrice) {
  var tax = null;
  propertyPrice = parseFloat(propertyPrice);

  if (propertyPrice > 750000) {
    tax =
      (propertyPrice - 750000) * 0.12 +
      (750000 - 325001) * 0.1 +
      (325000 - 250001) * 0.05 +
      (250000 - 145001) * 0.02;
  } else if (propertyPrice > 325001) {
    tax =
      (propertyPrice - 325001) * 0.1 +
      (325000 - 250001) * 0.05 +
      (250000 - 145001) * 0.02;
  } else if (propertyPrice > 250001) {
    tax = (propertyPrice - 250001) * 0.05 + (250000 - 145001) * 0.02;
  } else if (propertyPrice > 145001) {
    tax = (propertyPrice - 145001) * 0.02;
  } else if (propertyPrice >= 0) {
    tax = 0;
  }

  return tax == null ? -1 : parseFloat(tax.toFixed(0));
}

module.exports = calculateTax;
