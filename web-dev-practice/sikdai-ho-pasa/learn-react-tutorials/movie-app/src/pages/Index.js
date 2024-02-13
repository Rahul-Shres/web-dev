//Index.js
// React component that fetches movies from an API and displays them
// pages/Index.js
import axios from "axios"; // Importing the axios library for making HTTP requests
import { useEffect, useState } from "react"; // Importing React hooks for managing component state and side effects
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import "./Index.css"; // Importing CSS styles for the component

function Index() {
  // State variables to store and manage data
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [searchMovieText, setSearchMovieText] = useState(""); // State for storing the search text entered by the user
  const [isError, setIsError] = useState(false); // State for tracking whether an error occurred during the API request
  const [searchErrorText, setSearchErrorText] = useState(false); // State for storing error message related to search input
  const [firstRun, setFirstRun] = useState(true); // State for tracking whether the component is first rendered
  const [loading, setLoading] = useState(false); // State for tracking whether the API request is in progress
  const [errorText, setErrorText] = useState(""); // State for storing the error message related to the API request

  useEffect(() => {
    // 2. useEffect - Summoning Jutsu: Fetches movies immediately when the component is first rendered
    fetchMovies();
  }, []);


  useEffect(() => {
    // 1. useEffect - Ninja Spy: Observes changes in searchMovieText and triggers actions accordingly
    console.log("movies");
    if (!firstRun) {
      const fetchTimer = setTimeout(() => {
        if (searchMovieText && searchMovieText.length > 2) {
          fetchMovies(); // Fetches movies when the searchMovieText has more than 2 characters
        } else if (searchMovieText && searchMovieText.length < 1) {
          fetchMovies(); // Fetches movies when the searchMovieText has less than 1 character (shows all movies)
        } else {
          setSearchErrorText(
            "Please enter at least 3 characters for searching."
          ); // Sets error message when searchMovieText doesn't meet the above conditions
        }
      }, 2000); // Waits for 2 seconds after the user stops typing before triggering the action

      return () => {
        clearTimeout(fetchTimer); // Clears the timer when the component is unmounted or the searchMovieText changes again
      };
    }
  }, [searchMovieText]);

  

  // 3. fetchMovies - Mission: Fetches movies from an API based on the searchMovieText
  const fetchMovies = async () => {
    setLoading(true); // Sets the loading state to true to indicate that the API request is in progress
    console.log("Calling API");
    setSearchErrorText(""); // Clears any previous search error message
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      ); // Makes an API request to fetch movies based on the searchMovieText
      setMovies(response.data.moviesData); // Updates the movies state with the received movie data
      setIsError(false); // Resets the error state to false
      setLoading(false); // Sets the loading state to false after the API request is completed
      setFirstRun(false); // Marks the component as not being first rendered anymore
    } catch (error) {
      setIsError(true); // Sets the error state to true to indicate that an error occurred
      setErrorText("Error: " + error.message); // Stores the error message in the errorText state
      setLoading(false); // Sets the loading state to false after the API request is completed
    }
  };

  return (
    <>
      <div className="index">
        <div>
          <Link to="/add">Add a Movie </Link>
          {localStorage.getItem("accessToken") ? (
            <>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Movies"
            value={searchMovieText} // Binds the searchMovieText state to the input field value
            onChange={(e) => setSearchMovieText(e.target.value)} // Updates the searchMovieText state as the user types in the input field
          />
        </div>
        {/* // Displays the search error message, if any */}
        <span>{searchErrorText}</span>
        <h1>Suggested Movies</h1>
        <br />
        {isError ? ( // Checks if an error occurred during the API request
          <>
            {/* // Displays the error message, if any */}
            <div>{errorText}</div>
          </>
        ) : (
          <>
            <div>
              {loading ? (
                <>Loading.....</> // Displays a loading message when the API request is in progress
              ) : (
                <></>
              )}
              {!loading && movies.length < 1 ? (
                <>No Movies Found</> // Displays a message when no movies are found
              ) : (
                <>
                  {movies.map((el) => {
                    return (
                      <div key={el.id} className="movieContainer">
                        {/* // Displays the movie name as a link for more details */}
                        <Link to={`/view_movies/${el.id}`}>{el.name}</Link>
                        {/* // Displays the movie image, if available */}
                        {el.image && <img src={el.image} alt="" />}
                        {/* // Displays additional movie information, if available */}
                        {el.info && <span>{el.info}</span>}
                        {/* // Displays the movie rating, if available */}
                        {el.rating && <span>{el.rating}</span>}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Index;

// the axios library is being used to make an HTTP GET request and fetch data from an API.

// In this code, the setMovies function is used to update the movies state variable, which
//  triggers a re-render of the component and reflects the new data on the page.

// When the fetchMovies function fetches the movie data from the API, it updates the movies
// state using setMovies(response.data.moviesData). By updating the state,
//  React recognizes that there has been a change in the component's data, and it schedules
//  a re-render of the component.

// By using state and setMovies, any updates to the movies state will trigger a re-render,
//  ensuring that the new data fetched from the API is reflected in the component's UI.
//  This is one of the core principles of React's declarative programming model, where the
//  UI automatically updates based on the current state of the component.

// If a regular variable were used instead of state, modifying the variable wouldn't trigger
// a re-render, and the UI wouldn't reflect the new data. By using state and the
//  corresponding state setter function (setMovies), React manages the state updates and ensures
//  the UI stays in sync with the data changes.

// In the code snippet you provided, movies.map() is indeed called on the movies state variable. It is used to iterate over each item in the movies array and generate a corresponding JSX element for each movie.

// The map() function in JavaScript is a built-in array method that allows you to create a new array by applying a transformation to each element of the original array. In this case, it is used to iterate over each el (element) in the movies array.

// Regarding the naming, el is just a variable name chosen to represent each individual movie object in the movies array during the mapping process. The choice of the variable name is arbitrary and can be anything you prefer. You could replace el with any other variable name, such as movie or item, and the code would work the same.

// Inside the map() function, a JSX element is created for each movie using the movie's id as the key prop and displaying the movie's name. The key prop is required by React to uniquely identify each element in an array of dynamically rendered elements, helping with performance optimizations.

// So, to summarize, the map() function is used on the movies array to iterate over each movie object, and for each movie, a JSX <div> element is returned with the key set as the id of the movie and displaying the name property.
