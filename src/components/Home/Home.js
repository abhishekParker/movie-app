import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "harry potter";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch, movieText]);
  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
