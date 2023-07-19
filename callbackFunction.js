function takesCallback(callbackFunction) {
  console.log("Hello from takesCallback function");
  callbackFunction();
}

function isCallback() {
  console.log("Helo from callback function");
}

takesCallback(isCallback);

//asynchronous callback hell
function fetchData(callback) {
  setTimeout(()=>{
    setTimeout(()=>{
        callback()
    },1000)
  },10000)
}

function callback(){
    console.log("Callback HELL!")
}
fetchData(callback)