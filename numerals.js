function integerToRoman(num) {
const romanValue = {
M: 1000,
CM: 900,
D: 500,
CD: 400,
C: 100,
XC: 90,
L: 50,
XL: 40,
X: 10,
IX: 9,
V: 5,
IV: 4,
I: 1

};
let roman = " ";
for (let key in romanValue) {
while (num >= romanValue[key]) {

roman += key;
num -= romanValue[key];
}

}
return roman;
}


console.log(integerToRoman(40));
console.log(integerToRoman(1985));