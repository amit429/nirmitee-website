import React from "react";
import axios from "axios";

const refreshToken = async () => {
  const res = await axios.get(
    "https://nirmitee-backend.herokuapp.com/user/refresh_token"
  );
  // setToken(res.data.accesstoken);
  console.log(res);
};

const Test = () => {
  refreshToken();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
    </>
  );
};

export default Test;
