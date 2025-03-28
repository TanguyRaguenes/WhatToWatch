export interface Movie {

    // {
    //     "adult": false,
    //     "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    //     "genre_ids": [
    //         18,
    //         80
    //     ],
    //     "id": 238,
    //     "original_language": "en",
    //     "original_title": "The Godfather",
    //     "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    //     "popularity": 36.8013,
    //     "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    //     "release_date": "1972-03-14",
    //     "title": "The Godfather",
    //     "video": false,
    //     "vote_average": 8.7,
    //     "vote_count": 21208
    // }


    adult:boolean;
    backdrop_path:string;
    genre_ids:number[];
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;



}
