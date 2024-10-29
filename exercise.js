// Function to start preparing sandwiches
function startPreparingSandwiches() {
    console.log("Started making sandwiches...");
}

// Function to handle the outcome of the shopping
function handleShoppingOutcome(crispsAvailable) {
    if (crispsAvailable) {
        plateUpSandwiches();
    } else {
        prepareSalad();
    }
}

// Function to plate up the sandwiches
function plateUpSandwiches() {
    console.log("Crisps are available. Plating up the sandwiches...");
}

// Function to prepare a salad
function prepareSalad() {
    console.log("Crisps are not available. Preparing a salad instead...");
}

// Simulate the process
startPreparingSandwiches();

// Simulate receiving a text from your friend
let crispsAvailable = false; // Change this to false to simulate crisps not being available
handleShoppingOutcome(crispsAvailable);