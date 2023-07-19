async function fetcher() {
  console.log("Before fetching......");
  response = await fetch("https://jsonplaceholder.typicode.com/posts"); //waits till the promise resolves
  const posts = await response.json(); //waits till the promise resolves
  console.log(posts);
  console.log("After fetching......");
}

fetcher();
