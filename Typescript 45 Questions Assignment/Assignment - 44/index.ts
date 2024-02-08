function make_sandwich(...sandwich_items: string[]) {
    console.log(`Making the sandwich with following items: ${sandwich_items.join(', ')}.`);
}

make_sandwich("Egg");

make_sandwich("Egg", "Chicken cubes");

make_sandwich("Egg", "Chicken Cubes", "Cheese");