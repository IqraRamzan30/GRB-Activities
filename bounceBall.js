
function bouncingBall(h=5, bounce=0.66, window=1.5) {
let ball_h = h;
let num = 0; 
  //ball will be dropped here
if (ball_h > window) {
num += 1;
ball_h *= bounce;
} else {
num = -1;
}
while (ball_h > window) {
num += 2;
  ball_h *= bounce;
}
console.log(num)
return num;
}
bouncingBall()
