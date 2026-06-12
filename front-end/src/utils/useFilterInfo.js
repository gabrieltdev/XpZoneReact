import { useState, useEffect, useRef } from "react";

export function useFilterInfo(apiFunction) {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true)

    const apiRef = useRef(apiFunction);

    useEffect(() => {
        apiRef.current = apiFunction;
    }, [apiFunction]);

    useEffect(() => {
        async function loadInfos() {
        try {
            setLoading(true)
            const token = localStorage.getItem('token');

            const data = await apiRef.current(token);
            setInfo (data);
        } catch( error ) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

        loadInfos()
    }, []);
    return { info, loading }
}