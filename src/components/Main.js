import React, { useState, useEffect } from "react";
import axios from "axios";

import requests from "../Reqeust";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * 20)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  // console.log(movie);

  const truncateOverview = (string, size) => {
    if (string?.length > size) {
      const newStr = string.slice(0, size) + "...";
      return newStr;
    }
    return string;
  };
  return (
    <div className="w-full h-[550px] text_white">
      <div className="h-full w-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl  md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="bg-gray-300 text-black border-gray-300 px-5 py-2">
              Play
            </button>
            <button className=" text-white border border-gray-300 px-5 py-2 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Release Date: {movie?.release_date}
          </p>
          <p className="w-full md:w-[70%] lg:max-w-[40%] text-gray-200">
            {truncateOverview(movie?.overview, 140)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
