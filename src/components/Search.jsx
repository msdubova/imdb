import React, { useState } from "react";
import { searchMovies, searchTvShows } from "../api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState("movie");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchType === "movie") {
      const data = await searchMovies(query);
      setResults(data.results);
    } else {
      const data = await searchTvShows(query);
      setResults(data.results);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies or TV shows"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
        </select>
        <button type="submit">Search</button>
      </form>

      <div className="movies-grid">
        {results.map((item) => (
          <div key={item.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
            />
            <h3>{item.title || item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
