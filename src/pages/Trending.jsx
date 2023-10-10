import React from "react";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { API_URL_POPULARITY, genres, URL } from "../api/Api";

import GenreList from "../components/GenreList";

function Trending() {
    const [genreUrl, setGenreUrl] = useState(API_URL_POPULARITY + 28);
    const { data: genre, isPanding, error } = useFetch(genreUrl);

    const setGenre = (id) => {
        const elm = document.getElementById(id);
        elm.children[0].classList.add("btn-secondary");
    };
    return (
        <div>
            <h1 className=" text-2xl">Trending</h1>
            <ul className="flex gap-2 flex-wrap py-4">
                {genres.map((genre) => {
                    return (
                        <li id={genre.id} key={genre.id}>
                            <button
                                onClick={() => {
                                    setGenre(genre.id);
                                    setGenreUrl(
                                        () =>
                                            URL +
                                            "discover/movie?sort_by=popularity.desc&language=en-US&with_genres=" +
                                            genre.id
                                    );
                                }}
                                className="btn"
                            >
                                {genre.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div>{genre && <GenreList genre={genre} />} </div>
        </div>
    );
}

export default Trending;
