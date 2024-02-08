function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The size of the shirt is ${size} and the message printed on it is '${message}'.`);
}

make_shirt();

make_shirt('Medium');

make_shirt('Small', 'TypeScript is cool!');