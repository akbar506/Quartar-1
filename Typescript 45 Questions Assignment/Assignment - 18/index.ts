let fav_places: string[] = ["Sakardu", "GreenLand", "Dubai", "Canada"];

console.log(fav_places, "\n");

for(let i = 0; i < fav_places.length; i++){
    console.log(fav_places[i], "\n");
}

let sort_array1: string[] = fav_places.sort();
for(let j = 0; j < sort_array1.length; j++){
    console.log(sort_array1[j], "\n");
}

console.log(fav_places, "\n");

let reverse_sort_array: string[] = sort_array1.reverse();
console.log(reverse_sort_array, "\n");

console.log(fav_places, "\n");

let reverse_fav_place: string[] = fav_places.reverse();
console.log(reverse_fav_place, "\n");

let reverse_fav_place2:string[] = reverse_fav_place.reverse();
console.log(reverse_fav_place2, "\n");

let sort_reverse2: string[] = reverse_fav_place2.sort();
console.log(sort_reverse2, "\n");

let sort_reverse3: string[] = sort_reverse2.reverse();
console.log(sort_reverse3)