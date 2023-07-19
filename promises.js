//creating new promise which resolves when data is fetched otherwise rejects
dataFetchPromise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err));
});

console.log(dataFetchPromise); //logs promise at pending stage as fetching data takes some time

dataFetchPromise
  .then((data) => console.log(data)) //function gets called when promise is resolved
  .catch((err) => {
    //this function gets called when promise is rejected
    console.log(`The promise was rejected. The error was:`);
    console.log(err);
  });
