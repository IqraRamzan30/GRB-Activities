// Function that returns a promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data from ${url}`);
            } else {
                reject('No URL provided');
            }
        }, 1000);
    });
}

// Using promise chaining
fetchData('https://api.example.com/data')
    .then(response => {
        console.log(response);
        return fetchData('https://api.example.com/more-data');
    })
    .then(response => {
        console.log(response);
        return fetchData('https://api.example.com/even-more-data');
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });