import { useState, useCallback, useEffect } from 'react';

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
      const response = await fetch(`http://127.0.0.1:8000/search?username=${search}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      // Handle errors here
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
