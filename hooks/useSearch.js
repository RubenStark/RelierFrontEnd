import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { API_HOST } from '../utils/constants';

const useSearch = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback(async () => {
        if (search.length === 0) {
            setData([]);
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${API_HOST}${search}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            error && toast.error("Error al cargar los usuarios");
        }
        setIsLoading(false);
    }, [search]);

    useEffect(() => {
        let timeoutId;
        const handleDelayedFetchData = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(fetchData, 500);
        };

        handleDelayedFetchData(); // Initial call

        return () => clearTimeout(timeoutId); // Clean up the timeout when the component unmounts
    }, [search, fetchData]);

    return { search, setSearch, data, isLoading };
};

export default useSearch;
