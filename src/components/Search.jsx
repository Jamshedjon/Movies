import { useState, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";
import { searchURL } from "../api/Api";
import { useFetch } from "../hooks/useFetch";
import Recomended from "./Recomended";
function Search() {
    const [inputValue, setInputValue] = useState("");
    const searchValue = useRef(0);
    const { data: searchData } = useFetch(searchURL + searchValue.current);
    useEffect(() => {
        searchValue.current = inputValue;
    });
    return (
        <>
            <div className="form-control w-full py-8">
                <label className="input-group input-group-lg ">
                    <span className="bg-transparent">
                        <MdSearch className="w-6 h-6 hover activeIcon iconColor" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search for movies or TV series"
                        className="input w-full bg-transparent "
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
            </div>
            <div>{searchData !== 0 && <Recomended data={searchData} />}</div>
        </>
    );
}

export default Search;
