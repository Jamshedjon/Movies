export const POPULAR_API_URL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOPRATED_API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const NOWPLAYING_API_URL =
    "https://api.themoviedb.org/3/movie/now_playing&language=en-US";

export const API_URL_POPULARITY =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&with_genres=";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const searchURL = "https://api.themoviedb.org/3/search/movie?query=";

export const URL = "https://api.themoviedb.org/3/";

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ0YTBiOTA3NmVjMTcyNjAwNGVkZWU1Y2NlOGNiZCIsInN1YiI6IjY1MjQyNzY1MGNiMzM1MTZmZWM0NzAyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UTWvl4i1tElA6N9W0dfFkTWQnk7oSwEr1hAit6FTpyk",
    },
};

export const genres = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 80,
        name: "Crime",
    },
    {
        id: 99,
        name: "Documentary",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 10751,
        name: "Family",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 36,
        name: "History",
    },
    {
        id: 27,
        name: "Horror",
    },
    {
        id: 10402,
        name: "Music",
    },
    {
        id: 9648,
        name: "Mystery",
    },
    {
        id: 10749,
        name: "Romance",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 10770,
        name: "TV Movie",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
    {
        id: 37,
        name: "Western",
    },
];
