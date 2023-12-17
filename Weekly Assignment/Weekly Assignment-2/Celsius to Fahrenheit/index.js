"use strict";
function cel_to_fah(temp_cel) {
    let con_temp_fah = (temp_cel * 9 / 5) + 32;
    // console.log(`${con_temp_fah} °F`);
    return `${con_temp_fah} °F`;
}
function fah_to_cel(temp_fah) {
    let con_tem_cel = ((temp_fah - 32) * 5) / 9;
    // console.log(`${con_tem_cel} °C`);
    return `${con_tem_cel} °C`;
}
console.log(cel_to_fah(46));
console.log(fah_to_cel(103));
