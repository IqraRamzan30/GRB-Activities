const sevenboom = (arr) => {
let a = [];
let b = "There is no. 7 in the array.";
for (let i = 0; i < arr.length; i++){
a.push(arr[i].toString());
}
//console.log("a : " + a)
for (let i = 0; i < a.length; i++) {
//console.log("i: " + i);
for (let j = 0; j < a[i].length; j++) {
//console.log("j: " + j);
//console.log("a[i][j]: " + a[i][j] )
if (a[i][j] == 7) { b = "Boom!";
}
}
}
return b;
};

console.log(sevenboom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenboom([8, 6, 33, 100]));
console.log(sevenboom([2, 55, 60, 97, 86]));
console.log(sevenboom([2, 57, 60, 97, 86]));