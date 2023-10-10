import Recomended from "../components/Recomended";
import { useFetch } from "../hooks/useFetch";
function TvSeries() {
    const url =
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const { data: upcoming } = useFetch(url);
    return (
        <div>
            <h1 className=" text-2xl">Bookmarked Movies</h1>
            <div>{upcoming && <Recomended data={upcoming} />}</div>
        </div>
    );
}

export default TvSeries;
