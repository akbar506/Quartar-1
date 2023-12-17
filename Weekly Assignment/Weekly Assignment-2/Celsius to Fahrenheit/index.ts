function cel_to_fah(temp_cel:number){
    let con_temp_fah:number = (temp_cel* 9/5) + 32;
    return `${con_temp_fah} °F`;
    
}

function fah_to_cel(temp_fah:number){
    let con_tem_cel:number = ((temp_fah - 32) * 5)/9;
    return `${con_tem_cel} °C`;
}

console.log(cel_to_fah(46));

console.log(fah_to_cel(103));