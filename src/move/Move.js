import React from "react";
import { useGlobalContext } from "./Contex";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const Move = () => {
  const { movie, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section>
      {movie.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/${id}`} key={id} className="movie">
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title} />

              <div className="move-info">
                <h4 className="titel">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Move;
