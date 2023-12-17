function bill(units_consumed:number){
    if (units_consumed > 0 && units_consumed<501) {
        if(units_consumed > 100){
            let one_unit_price:number = 5;
            let mul_price:number = one_unit_price * units_consumed;
            let add_tax_price:number = mul_price * 0.1;
            let total_tax_unit_price:number = add_tax_price + mul_price;
            console.log(`You have used ${units_consumed} Units\nOne Unit Price: Rs${one_unit_price}\tAmount you will pay: Rs${mul_price}\nTAX: Rs${add_tax_price}\tTotal Amount you will pay: Rs${total_tax_unit_price} (Including tax)`);
        }else if(units_consumed > 200){
            let one_unit_price:number = 7;
            let mul_price:number = one_unit_price * units_consumed;
            let add_tax_price:number = mul_price * 0.15;
            let total_tax_unit_price:number = add_tax_price + mul_price;
            console.log(`You have used ${units_consumed} Units\nOne Unit Price: Rs${one_unit_price}\tAmount you will pay: Rs${mul_price}\nTAX: Rs${add_tax_price}\tTotal Amount you will pay: Rs${total_tax_unit_price} (Including tax)`);
        }else if(units_consumed > 500){
            let one_unit_price:number = 9;
            let mul_price:number = one_unit_price * units_consumed;
            let add_tax_price:number = mul_price * 0.25;
            let total_tax_unit_price:number = add_tax_price + mul_price;
            console.log(`You have used ${units_consumed} Units\nOne Unit Price: Rs${one_unit_price}\tAmount you will pay: Rs${mul_price}\nTAX: Rs${add_tax_price}\tTotal Amount you will pay: Rs${total_tax_unit_price} (Including tax)`);
        }else{
            let one_unit_price:number = 3;
            let mul_price:number = one_unit_price * units_consumed;
            let add_tax_price:number = mul_price * 0.25;
            let total_tax_unit_price:number = add_tax_price + mul_price;
            console.log(`You have used ${units_consumed} Units\nOne Unit Price: Rs${one_unit_price}\tAmount you will pay: Rs${mul_price}\nTAX: Rs${add_tax_price}\tTotal Amount you will pay: Rs${total_tax_unit_price} (Including tax)`);
        }
    } else {
        console.log("Value Should be below 500");
    }
}

bill(600)