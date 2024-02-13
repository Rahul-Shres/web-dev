// pages/ViewMovie.js
import { useState } from 'react';
import React from 'react';
import axios from "axios";


import { useParams } from 'react-router-dom';
// npm install react-router-dom axios

const ViewMovie = () => {
  const getParams = useParams();
  const getID = getParams.id;

  const [movieData, setMovieData] = useState({});

  const getSingleMovieInfo = async () => {
    try{
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getID}`
      );
      setMovieData(response.data.singleMovieData)
    }catch(err) {
      alert(err.message);
    }
  }

 

  return (
    <div>
    <h1>View Movie {getID}</h1>
    <button onClick={getSingleMovieInfo}>View This Movie</button> <br />
    Movie Detail : <br />
    {movieData.name ? (
      <>
        Movie Name: {movieData.name} <br />
        Movie Image: <img src={movieData.image} alt="Movie Poster" /> <br />
        Info: {movieData.info} <br />
        Description: {movieData.description} <br />
      </>
    ) : (
      <span>Loading...</span>
    )}
  </div>
  );
};

export default ViewMovie;
