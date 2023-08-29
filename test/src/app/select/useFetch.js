import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);
  return data;
};

export default useFetch;