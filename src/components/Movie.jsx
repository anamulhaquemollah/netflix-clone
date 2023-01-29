import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieShowHandler = async() => {
    if (user?.email) {
      setLike(!like); 
      setSaved(true); 
      const movieID = doc(db, "users", `${user?.email}`);
      await updateDoc(movieID, {
        
        savedMovies: arrayUnion({
          id: movie.id, 
          title: movie.title, 
          img: movie.backdrop_path
        })
      })
    } else{
      alert("Please log in to save a movie!"); 
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[240px] h-auto p-2 inline-block relative">
      <img
        className="w-full h-full"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt=""
      />
      <div className="absolute w-full h-full top-0 hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="absolute top-3 left-3" onClick={movieShowHandler}>
          {like ? (
            <AiFillHeart size={20} className="text-red-600" />
          ) : (
            <AiOutlineHeart size={20} />
          )}
        </p>
        <p className="text-sm md:text-base lg:text-lg flex justify-center items-center h-full">
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
