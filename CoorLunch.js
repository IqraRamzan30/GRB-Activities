//Function to allow sandwiches be prepared
function preparingSandwiches(){
    console.log("Start of making the sandwiches");
}
//Function if crisps are available
function resultOfShopping(Availablecrisp){
if (Availablecrisp) {
        plateUpsandwiches();
    } else {
        preparingSalad();
    }
}
//Message display if crisps are available
function plateUpsandwiches(){
    console.log("The crisps are available...Sandwiches are being plated up");
} 
//Message display if crisps are unavailable
function preparingSalad() {
    console.log("The crisps are unavailable... Salad is being plated up");
}

preparingSandwiches();
//Input to allow code to run
let Availablecrisp =false;
resultOfShopping(Availablecrisp);
