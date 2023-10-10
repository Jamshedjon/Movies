import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../api/Api";
function Recomended({ data }) {
    return (
        <div className="">
            <div className="carousel">
                {data &&
                    data.map((elm) => {
                        const {
                            title,
                            poster_path,
                            vote_average,
                            overview,
                            id,
                        } = elm;

                        return (
                            <article key={id} className="card">
                                <figure className="project_item">
                                    <img
                                        className="w-[300px]"
                                        src={`${
                                            poster_path
                                                ? IMG_URL + poster_path
                                                : "http://via.placeholder.com/1080x1580"
                                        }`}
                                        alt="car!"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className=" text-md">{title}</h2>
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
                                <div className="mask"></div>
                            </article>
                        );
                    })}
            </div>
        </div>
    );
}

export default Recomended;
