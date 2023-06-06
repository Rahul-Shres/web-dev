import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const AddMovie = () => {
  const history = useHistory();
  const movie_name_reference = useRef();
  const rating_reference = useRef();
  const desc_reference = useRef();

  const addMovieHandler = async (e) => {
    e.preventDefault();

    const movieData = {
      movie_name: movie_name_reference.current.value,
      rating: rating_reference.current.value,
      description: desc_reference.current.value,
    };

    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/movies",
        movieData,
        {
          timeout: 10000,
        }
      );
      alert(response.data.message);
      history.replace("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occurred! Try again later.");
      }
    }
  };

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <br />
      <form onSubmit={addMovieHandler}>
        <input
          type="text"
          placeholder="Movie Name"
          ref={movie_name_reference}
        />
        <input type="number" placeholder="Rating" ref={rating_reference} />
        <input type="text" placeholder="Description" ref={desc_reference} />
        <button type="submit">Add a movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
