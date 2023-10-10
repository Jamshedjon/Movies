import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL, IMG_URL } from "../api/Api";
import { useFetch } from "../hooks/useFetch";
function Preview() {
    const { id } = useParams();
    const { data: prew, setData } = useFetch(
        `https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`
    );
    console.log(prew);

    return (
        <div>
            {prew && (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={`${
                                prew.poster_path
                                    ? IMG_URL + movie.poster_path
                                    : "http://via.placeholder.com/1080x1580"
                            }`}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Preview;
