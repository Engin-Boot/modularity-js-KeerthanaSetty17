const indexIn= require("./index");
let { GetPairNumberFromColorsRef , GetColorFromPairNumber , MajorColorsRef , MinorColorsRef } = indexIn;

function toString(){
var code;
console.log("25 pair color code:");
for(var key in MajorColorsRef){
  console.log("outer for in");
    for(var key1 in MinorColorsRef){
        code= GetPairNumberFromColorsRef(MajorColorsRef[key],MinorColorsRef[key1]);
        console.log("inner for in");
        console.log(code+":"+MajorColorsRef[key]+MinorColorsRef[key1]);
    }
  }
}

module.exports=toString;