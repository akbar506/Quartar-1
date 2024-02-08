let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Dynamo', 'Derren Brown', 'Lance Burton'];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let greatMagicians: string[] = make_great([...magicians]);

console.log("Original magicians:");
show_magicians(magicians);

console.log("Great magicians:");
show_magicians(greatMagicians);
