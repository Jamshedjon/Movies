import React, { useState } from "react";
import { IMG_URL } from "../api/Api";
import { Link } from "react-router-dom";

function GenreList({ genre }) {
    return (
        <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {genre.map((data) => {
                const { title, poster_path, vote_average, overview, id } = data;

                return (
                    <li key={id} className="">
                        <figure>
                            <img
                                src={`${
                                    poster_path
                                        ? IMG_URL + poster_path
                                        : "http://via.placeholder.com/1080x1580"
                                }`}
                                alt="car!"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>

                            <div className="card-actions justify-end">
                                {
                                    <Link
                                        to={`/movie/${id}`}
                                        className="btn btn-primary"
                                    >
                                        Batafsil
                                    </Link>
                                }
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default GenreList;
