"use strict";
function discount(price) {
    if (price >= 100) {
        let dis_get_price = price * 0.1;
        let dis_price = price - dis_get_price;
        console.log(`You get the discount of ${dis_get_price} dollars\nOrignal Price: ${price} dollars\tDiscount Price: ${dis_price} dollars`);
    }
    else {
        let dis_get_price = price * 0.05;
        let dis_price = price - dis_get_price;
        console.log(`You get the discount of ${dis_get_price} dollars\nOrignal Price: ${price} dollars\tDiscount Price: ${dis_price} dollars`);
    }
}
discount(200);
