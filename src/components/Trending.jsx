// src/components/Trending.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
import { getTrending } from "../api";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const data = await getTrending();
      setTrending(data.results);
    };
    fetchTrending();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center">
        Trending Movies and TV Shows
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {trending.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <CardContent>
                  <Typography variant="h6" noWrap>
                    {movie.title || movie.name}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Trending;
