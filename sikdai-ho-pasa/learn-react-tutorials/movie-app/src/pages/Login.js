import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const loginHandler = async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/login",
        loginData,
        {
          timeout: 10000,
        }
      );
      console.log(response.data.message);
      alert(response.data.message);

      if (response.data.status === "success") {
        alert("Logged in Successfully!");
        const getAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", getAccessToken);
        history.push("/profile"); // Redirect to the profile page
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      }
      console.error(error);
      alert("Unknown error has occurred");
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <input type="text" name="email" placeholder="Email" ref={email} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
