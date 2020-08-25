const expect = require('chai').expect;
const indexInput= require("./index");

function testNumberToPair(number, expectedMajor, expectedMinor) {
  const pairOfColors = indexInput.GetColorFromPairNumber(number);
  console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
  expect(pairOfColors.major).equals(expectedMajor);
  expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
  const pairNumber = indexInput.GetPairNumberFromColors(majorColor, minorColor);
  console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
  expect(pairNumber).to.equal(expectedNumber);
}

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);

module.exports= { testColorToNumber, testNumberToPair};