import React, { useEffect, useState } from "react";
import { getTvShows } from "../api";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      const data = await getTvShows();
      setTvShows(data.results);
    };
    fetchTvShows();
  }, []);

  return (
    <div>
      <h2>TV Shows</h2>
      <div className="movies-grid">
        {tvShows.map((show) => (
          <div key={show.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShows;
