function age(user_age:number){
    if (user_age <= 12) {
        console.log("Child");
    } else if(user_age >= 13 && user_age <= 19){
        console.log("Teenager");
    }else{
        console.log("Adult");
    }
}

age(21);