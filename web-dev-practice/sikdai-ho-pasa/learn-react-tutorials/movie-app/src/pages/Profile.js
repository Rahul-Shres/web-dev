import { useHistory, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const getAccessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/me",
        {
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      console.log(response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occurred! Try again later.");
      }
    }
  };

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };

  return (
    <>
      <Link to="/">Go Home</Link>
      <br />
      Name: {userData.name} <br />
      Email: {userData.email} <br />
      Country: {userData.country} <br />
      <button onClick={onLogout}>Log out</button>
    </>
  );
};

export default Profile;
