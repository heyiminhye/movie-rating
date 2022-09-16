import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectMovieOrShow,
  removeSelectMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

export const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow);

  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                평점 <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                평점참여 <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
              </span>
              <span>
                상영시간 <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                개봉일 <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>감독</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>출연</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>장르</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>언어</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>시상</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};
