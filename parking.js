const calculateParkingCost = (hour) => {
if (hour >= 0 && hour < 5) {
    return 300; 
} else if (hour >= 5 && hour < 10) {
    return 350; 
} else if (hour >= 10 && hour < 15) {
    return 500; 
} else if (hour >= 15 && hour < 20) {
    return 700; 
} else if (hour >= 20 && hour < 24) {
        return 400;
} else {
        return "Invalid hour. Please enter a value between 0 and 23.";
}
}

console.log(calculateParkingCost(2)); 
console.log(calculateParkingCost(6));  
console.log(calculateParkingCost(12)); 
console.log(calculateParkingCost(16)); 
console.log(calculateParkingCost(27)); 
