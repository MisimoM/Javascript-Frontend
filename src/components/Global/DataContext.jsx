import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://win23-assignment.azurewebsites.net/api/articles");
        if (response.status === 200) {
            console.log("Response status 200 - Fetching data");
            const data = await response.json();
            setData(data);
            setLoading(false);
            setError(null);
        } else {
            throw new Error('Request to the API failed');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
            setLoading(false);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    data,
    loading,
    error,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}