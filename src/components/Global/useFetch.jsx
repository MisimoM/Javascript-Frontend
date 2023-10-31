import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(response.status === 200) {
                    console.log(response.status);
                    const data = await response.json();
                    setData(data);
                    setLoading(false);
                    setError(null);
                } else {
                    throw new Error('Request to the API failed');
                }
            } catch (error) {
                console.error("Error sending data:", error);
                setError(error);
                setLoading(false);
            }
        };
        fetchData()
    }, [url] );
    
    return {data, loading, error};
}