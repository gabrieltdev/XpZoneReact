import { useState, useEffect } from 'react';
import { SearchGames } from '../services/game';

export function useSearchGames(filters) {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const { city, consoles, trade_type, condition, search, orderBy } = filters;

    useEffect(() => {
        async function loadGames() {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');

                const currentParams = { city, consoles, trade_type, condition, search, orderBy };

                const data = await SearchGames(token, currentParams);
                setInfo(data);
            } catch (error) {
                console.error("Erro na busca de jogos:", error);
            } finally {
                setLoading(false);
            }
        }

        loadGames();

    }, [city, consoles, trade_type, condition, search, orderBy]);

    return { info, loading };
}