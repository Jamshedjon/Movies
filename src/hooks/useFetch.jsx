import { useEffect, useState } from "react";
import { options } from "../api/Api";
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPanding, setIsPanding] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            setIsPanding(true);
            try {
                const req = await fetch(url, options);
                if (!req.ok) {
                    throw new Error(req.statusText);
                }
                const data = await req.json();
                setData(data.results);
                setIsPanding(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setIsPanding(false);
            }
        };
        getData();
    }, [url]);
    return { data, isPanding, error };
}
