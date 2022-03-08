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
      <Div className="single-movie-info">
        <h2>{title}</h2>
        <p>
          <Span>PLOT</Span>
          {plot}
        </p>

        <p>
          <Span>YEAR</Span> {year}
        </p>
        <p>
          <Span>ACTORS</Span> {Actors}
        </p>
        <p>
          {" "}
          <Span>AWARDS</Span> {Awards}{" "}
        </p>
        <p>
          {" "}
          <Span>EARNINGS</Span> {BoxOffice}{" "}
        </p>
        <p>
          <Span>RUNTIME</Span> {Runtime}{" "}
        </p>
        <p>
          <Span>DIRECTOR</Span> {Director}{" "}
        </p>
        <p>
          {" "}
          <Span>GENRE</Span> {Genre}
        </p>
        <p>
          <Span>RATED</Span> {Rated}{" "}
        </p>
        <p>
          <Span>RELEASED</Span> {Released}{" "}
        </p>
        <p>
          <Span>TYPE</Span> {Type}{" "}
        </p>
        <p>
          <Span>WRITERS</Span> {Writer}{" "}
        </p>

        <Link to="/" className="btn">
          back to movies
        </Link>
      </Div>
    </section>
  );
};

export default SingleMovie;
const Div = styled.div`
  p {
    padding: 0.3rem;
    border: 1px solid black;
    border-radius: 8px;
  }
`;
const Span = styled.span`
  background-color: black;
  color: aliceblue;
  padding: 0.5rem;
  margin: 0rem 1rem 0rem 0rem;
  border-radius: 5px;
  font-size: 1rem;
`;
