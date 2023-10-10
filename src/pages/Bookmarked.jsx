import Recomended from "../components/Recomended";
import { useFetch } from "../hooks/useFetch";

import { TOPRATED_API_URL } from "../api/Api";

function Bookmarked() {
    const url = TOPRATED_API_URL;
    const { data: top_reted } = useFetch(url);
    return (
        <div>
            <h1 className=" text-2xl">Bookmarked Movies</h1>
            <div>{top_reted && <Recomended data={top_reted} />}</div>
        </div>
    );
}

export default Bookmarked;
