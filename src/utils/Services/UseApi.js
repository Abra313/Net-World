
import { useState, useEffect, useCallback } from 'react';

const useGetApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};


const usePostApi = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const postData = useCallback(async (postData) => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, [url]);
  
    return { postData, loading, error };
  };
  
  const useDeleteApi = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const deleteData = useCallback(async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, [url]);
  
    return { deleteData, loading, error };
  };
  
  const usePutApi = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const putData = useCallback(async (putData) => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(putData),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, [url]);
  
    return { putData, loading, error };
  };

  export {useDeleteApi,useGetApi,usePutApi,usePostApi}