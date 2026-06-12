import { useEffect, useState, useRef } from "react";

export function useInfoById(apiFunction, id) {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true)

    const apiRef = useRef(apiFunction);
        
    useEffect(() => {
        apiRef.current = apiFunction;
    }, [apiFunction]);

    useEffect(() => {
        async function loadData() {
        try {
            setLoading(true)

            const token = localStorage.getItem('token');

            const data = await apiRef.current(id, token);
            setInfo(data);
        } catch ( error ) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

        if (id) {
            loadData();
        }
    }, [id]);

    return { info, loading };
}