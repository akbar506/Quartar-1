let username: string[] = ["admin", "ali.506", "hamza123", "manijutt", "umerzarrar.123"];

for(let i = 0; i < username.length; i++){
    if(username[i] === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${username[i]}, thank you for logging in again.`);
    }
}