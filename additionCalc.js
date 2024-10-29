let inputOne = "1"
let inputTwo = "2"

let num1 = 1
let num2 = 1

num1 = Number(inputOne)
num2 = Number(inputTwo)


let stringToNum = (num1, num2)=>{
if(num1 == " " || num2 == " "){
return " "
}else if(num1 === 0, 1, 2 && num2 === 0, 1, 2){
let additionFunction = num1 + num2
return additionFunction

}else if(num1 || num2 > 2 && num1 || num2 < 1000){
return "handled input"
}else if(num1 || num2 < 0){
throw new Error('Unknown number spotted');
}
}
let result = stringToNum(4 , 2)

console.log(result)