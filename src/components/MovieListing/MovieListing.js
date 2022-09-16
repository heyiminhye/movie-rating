import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  console.log(shows);
  // let renderMovies = "";

  // renderMovies =
  //   movies.Response === "True" ? (
  //     movies.Search.map((movie, idx) => {
  //       <MovieCard key={idx} movie={movie} />;
  //     })
  //   ) : (
  //     <div className="movies-error">
  //       <h3>{movies.Error}</h3>
  //     </div>
  //   );

  let renderMovies = [];

  if (movies.Response === "True") {
    movies.Search.map((movie, idx) => {
      renderMovies.push(
        <Fragment key={idx}>
          <MovieCard movie={movie} />
        </Fragment>
      );
    });
  } else {
    renderMovies.push(
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  }

  let renderShows = [];

  if (shows.Response === "True") {
    shows.Search.map((movie, idx) => {
      renderShows.push(
        <Fragment key={idx}>
          <MovieCard movie={movie} />
        </Fragment>
      );
    });
  } else {
    renderShows.push(
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};
