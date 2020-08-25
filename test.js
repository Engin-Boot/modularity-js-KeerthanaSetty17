const expect = require('chai').expect;
const indexInput= require("./index");
let { GetPairNumberFromColorsRef , GetColorFromPairNumberRef ,MajorColorsRef , MinorColorsRef } = indexInput;


function testNumberToPair(number, expectedMajor, expectedMinor) {
  const pairOfColors = GetColorFromPairNumberRef(number);
  console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
  expect(pairOfColors.major).equals(expectedMajor);
  expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
  const pairNumber = GetPairNumberFromColorsRef(majorColor, minorColor);
  console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
  expect(pairNumber).to.equal(expectedNumber);
}

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);