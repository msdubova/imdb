import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Tv from "./components/Tv";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />{" "}
          {/* Маршрут для страницы с деталями фильма */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
