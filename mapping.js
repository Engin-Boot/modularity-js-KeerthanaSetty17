const indexIn= require("./index");

function toString(){
let code;
console.log("25 pair color code:");
for(let key in indexIn.MajorColors){
     for(let key1 in indexIn.MinorColors){
        code= indexIn.GetPairNumberFromColors(indexIn.MajorColors[key],indexIn.MinorColors[key1]);
        console.log(code+":"+indexIn.MajorColors[key]+indexIn.MinorColors[key1]);
    }
  }
}

module.exports= {toString};