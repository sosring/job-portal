import axios from "axios";
import { useState, useEffect } from "react";
const API_KEY = process.env.API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "fd08d2e10dmsh66204dddf200d98p15a44djsnde7838ad7f38",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);

      setData(res.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => fetchData(), []);

  const reFetch = () => {
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
