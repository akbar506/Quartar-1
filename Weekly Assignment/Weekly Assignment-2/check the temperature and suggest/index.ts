function check_temperature_suggest(temp:number){
    if(temp >= 36){
        console.log("Wear thin clothes");
    }else if(temp <= 35 && temp >= 29){
        console.log("Weather is Pleasant");
    }else{
        console.log("Wear Warm Clothes");
    }
}

check_temperature_suggest(27);