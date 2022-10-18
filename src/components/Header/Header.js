import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Header = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const submithandler = (event) => {
    event.preventDefault();
    if (searchMovie === "") return alert("Please enter a movie name");
    dispatch(fetchAsyncMovies(searchMovie));
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submithandler}>
          <input
            type="text"
            value={searchMovie}
            placeholder="Search Movies..."
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
