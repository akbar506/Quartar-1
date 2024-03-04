function fetchData(callback: (data:string) => void) {
    setTimeout(() => {
        const data: string = "Muhammad Akbar Ali";
        callback(data);
    }, 5000);
};

function GetData(data:string) {
    console.log(`User name is ${data}`)
};

fetchData(GetData);
console.log("Getting Data...");


// function
function greet(name: string, callback: () => void) {
    console.log("Hi" + " " + name);
    callback();
}
  
// callback function
function callMe() {
    console.log("I am callback function");
}
  
// passing function as an argument
greet("Peter", callMe);


console.log("Please Wait while we are fetching data")
console.log("Fetching Data...")