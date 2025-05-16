import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "../Banner/banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchActionMovies);
        const results = request?.data?.results;
        console.log(request);
        if (Array.isArray(results) && results.length > 0) {
          const randomIndex = Math.floor(Math.random() * results.length);
          setMovie(results[randomIndex]);
        } else {
          console.warn("No results found from the API.");
        }
      } catch (err) {
        console.log("Error fetching movie:", err);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "…" : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button-play">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner-fadeBottom" />
    </div>
  );
};

export default Banner;
