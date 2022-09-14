import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, idx) => {
        <MovieCard key={idx} movie={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}1</div>
      </div>
    </div>
  );
};
