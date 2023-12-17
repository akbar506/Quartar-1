function leap_year(year:number) {
    if(year%4 == 0){
        console.log(`${year} is Leap Year`);
    }else{
        console.log(`${year} is not Leap Year`);
    }
}

leap_year(2015)