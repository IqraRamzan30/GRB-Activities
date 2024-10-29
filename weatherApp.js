let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');


button.addEventListener('click ',function(){

fetch('https:\\api.openweathermap.org/data/2.5/weather?q=${inputvalue.value},uk&APPID=06054f8e498fae04c0a65c90eb85565c')
.then(response => response.json())
.then(
displayData)
.catch(err => alert ('This is an incorrect City, Try again'));


})

const displayData = (weather)=>{
    temp.innerText='${weather.main.temp'}
    desc.innerText='${weather.weather[0].main}'

