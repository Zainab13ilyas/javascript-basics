// Callback Function Example
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback(); // Execute the callback function after fetching data
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);

// Promises Example
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) resolve("Data fetched!");
      else reject("Failed to fetch data.");
    }, 2000);
  });
}

fetchDataPromise()
  .then((response) => console.log(response)) // Success case
  .catch((error) => console.error(error)); // Error handling

// Async/Await Example
async function fetchDataAsync() {
  try {
    let response = await new Promise((resolve) =>
      setTimeout(() => resolve("Data fetched!"), 2000)
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();

// Event Loop Execution Order Example

console.log("Start");

setTimeout(() => console.log("Timeout Callback"), 0);

Promise.resolve().then(() => console.log("Promise Resolved"));

console.log("End");

// Expected Output:
// Start
// End
// Promise Resolved
// Timeout Callback
