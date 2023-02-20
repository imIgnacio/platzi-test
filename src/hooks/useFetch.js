import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, setData, loading, error };
};
