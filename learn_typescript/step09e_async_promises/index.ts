function age(user_age: any) {
    return new Promise((resolve, reject) => {
        if (typeof user_age == "number") {
            resolve(user_age);
        } else if (typeof user_age == "string") {
            reject(`Input "${user_age}" must be number`);
        }
    });
};

age("ali")
    .then((age) => {
        console.log(`User age is ${age}`);
    })
    .catch((age) => {
        console.log(`Invalid Input "${age}"`)
    })
    .finally(() => {
        console.log("Thank you for using my program");
    });

console.log("Hi, Welcome to  my program...!");

function fetchData2(url: string) {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve(`Data for ${url}`);
        } else {
            reject("fghjkl");
        }
    });
}

fetchData2("fghjk")
    .then((value) => {
        console.log("this is then", value);
    })
    .catch((error) => {
        console.log("This is catch", error);
    })
    .finally(() => {
        console.log("Finally");
    });

// async function fetchData3(url: string) {
//     return new Promise((resolve, reject) => {
//         if (Math.random() > 0.5) {
//             resolve(`Data for ${url}`);
//         } else {
//             reject("fghjkl");
//         }
//     });
// }

// const response = await fetchData3("fghjk");
// console.log("🚀 ~ response:", response);

// export{}