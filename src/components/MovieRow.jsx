import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import Movie from "./Movie";

const MovieRow = ({ title, url, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setMovies(res?.data?.results));
  }, []);

  const leftArrowHandler = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft -= 500;
  };
  const rightArrowHandler = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft += 500
  };

  return (
    <>
      <h1 className="font-bold md:text-xl p-2">{title}</h1>
      <div className="flex items-center relative group">
        <AiOutlineLeft
          onClick={leftArrowHandler}
          className="absolute z-10  bg-white text-black rounded-full p-2 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-2 relative"
        >
          {movies.map((movie) => {
            return (
              <Movie key={movie.id} movie={movie} />
            );
          })}
        </div>
        <AiOutlineRight
          onClick={rightArrowHandler}
          className="absolute right-0 z-10  bg-white text-black rounded-full p-2 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default MovieRow;
