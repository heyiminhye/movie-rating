import { Link } from "react-router-dom";
import "./MovieCard.scss";

export const MovieCard = (props) => {
  // const { data } = props.movie;
  // console.log("props");
  // console.log("props.Title");
  // console.log(props.movie.Title);

  return (
    <div className="card-item">
      <Link to={`/movie/${props.movie.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={props.movie.Poster} alt={props.movie.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{props.movie.Title}</h4>
              <p>{props.movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
