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

// Async function using try/catch
async function getData() {
    try {
        const response1 = await fetchData('https://api.example.com/data');
        console.log(response1);

        const response2 = await fetchData('https://api.example.com/more-data');
        console.log(response2);

        const response3 = await fetchData('https://api.example.com/even-more-data');
        console.log(response3);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();