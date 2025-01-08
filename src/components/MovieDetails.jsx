import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api"; // Предположим, что у вас есть функция getMovieDetails в api

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";

const MovieDetails = () => {
  const { movieId } = useParams(); // Получаем ID фильма из URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <Alert severity="error" style={{ padding: "20px" }}>
        {error}
      </Alert>
    );
  }

  if (!movieDetails) {
    return (
      <Typography
        variant="h6"
        color="error"
        align="center"
        style={{ padding: "20px" }}
      >
        No movie details available.
      </Typography>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom>
        {movieDetails.title || movieDetails.name}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            {movieDetails.poster_path ? (
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title || movieDetails.name}
                height="400"
              />
            ) : (
              <div style={{ height: 400, backgroundColor: "#ccc" }}>
                <Typography
                  variant="h6"
                  align="center"
                  style={{ paddingTop: "150px" }}
                >
                  No Image Available
                </Typography>
              </div>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1">
              {movieDetails.overview || "No description available."}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Release Date:{" "}
              {movieDetails.release_date ||
                movieDetails.first_air_date ||
                "Unknown"}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Rating: {movieDetails.vote_average || "N/A"} / 10
            </Typography>
            <Typography variant="h6" gutterBottom>
              Genre:{" "}
              {movieDetails.genres && movieDetails.genres.length > 0
                ? movieDetails.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;
