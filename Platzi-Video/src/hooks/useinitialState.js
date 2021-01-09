import { useState, useEffect } from 'react';

const useInitialState = (API, APIKEY, categories) => {
  const [videos, setVideos] = useState([]);
  const FETCH = `${API}/${categories}/${APIKEY}`;
  useEffect(() => {
    fetch(FETCH)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
