function make_album(artist_name:string, album_title:string, track_numner?:number){
    let album_info = {
        artistName: artist_name,
        albumTitle: album_title,
        noOfTrack : track_numner
    }

    return album_info;
}

let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2");
let album3 = make_album("Artist 3", "Album 3", 12); // This album includes the number of tracks

// Printing each album
console.log(album1);
console.log(album2);
console.log(album3);