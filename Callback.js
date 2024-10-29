function firstFunction(callback) {
    setTimeout(() => {
        console.log("First function executed");
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log("Second function executed");
        callback();
    }, 1000);
}

function thirdFunction() {
    setTimeout(() => {
        console.log("Third function executed");
    }, 1000);
}

// Nested callbacks
firstFunction(() => {
    secondFunction(() => {
        thirdFunction();
    });
});