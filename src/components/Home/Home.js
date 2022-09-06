import { useEffect } from "react";
import { MovieListing } from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

export const Home = () => {
  const movieText = "Harry potter";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?i=tt3896198&APIkey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  });

  return (
    <div className="banner-img">
      <img src="" alt="" />
      <MovieListing />
    </div>
  );
};
