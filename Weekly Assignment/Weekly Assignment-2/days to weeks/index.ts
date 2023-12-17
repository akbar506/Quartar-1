function Days_to_weeks(days:number){
    let weeks:number = days/7;
    let rem_days:number = days % 7;
    
    if(weeks <= 1){
        console.log(`${days} days`)
    }else if(rem_days === 0){
        console.log(`${weeks} weeks`);
    }else{
        console.log(`${weeks} weeks and ${rem_days} days`);
    }
}

Days_to_weeks(8);