import { useEffect } from "react";
import { MovieListing } from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const Home = () => {
  useEffect(() => {
    const movieText = "Harry potter";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?i=tt3896198&APIkey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      console.log("THE response from API", response);
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
