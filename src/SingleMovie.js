import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Actors,
    Awards,
    BoxOffice,
    Runtime,
    Director,
    Genre,
    Rated,
    Released,
    Writer,
    Type,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>
          <span className="Comics-data">Plot:</span>
          {plot}
        </p>

        <p>{year}</p>
        <p> {Actors}</p>
        <p>{Awards} </p>
        <p>{BoxOffice} </p>
        <p>{Runtime} </p>
        <p>{Director} </p>
        <p> {Genre}</p>
        <p>{Rated} </p>
        <p>{Released} </p>
        <p>{Writer} </p>
        <p>{Type} </p>

        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
