// Function to create a promise that resolves after a random time between 1 and 5 seconds
function createRandomPromise() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5 + 1) * 1000; // Random time between 1 and 5 seconds
        setTimeout(() => {
            resolve(`Resolved after ${delay / 1000} seconds`);
        }, delay);
    });
}

// Create an array of five promises
const promises = [
    createRandomPromise(),
    createRandomPromise(),
    createRandomPromise(),
    createRandomPromise(),
    createRandomPromise()
];

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises).then((result) => {
    // Print the result in the div with id 'output'
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
});
