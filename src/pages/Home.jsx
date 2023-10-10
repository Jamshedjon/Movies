import Recomended from "../components/Recomended";
import { useFetch } from "../hooks/useFetch";

import { POPULAR_API_URL } from "../api/Api";

function Home() {
    const url = POPULAR_API_URL;
    const { data: popular } = useFetch(url);

    return (
        <div className="h-full">
            <h1 className=" text-2xl">Recomended for you</h1>
            <ul>
                <Recomended data={popular} />
            </ul>
        </div>
    );
}

export default Home;
