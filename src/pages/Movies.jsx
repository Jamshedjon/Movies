import { useFetch } from "../hooks/useFetch";
import { NOWPLAYING_API_URL } from "../api/Api";
import Recomended from "../components/Recomended";

function Movies() {
    const { data: movies, isPanding, error } = useFetch(NOWPLAYING_API_URL);

    return (
        <div>
            <h1 className=" text-2xl">Movies</h1>
            <div>{movies && <Recomended data={movies} />}</div>
        </div>
    );
}

export default Movies;
