import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Login Successfull! </h1>
      <Link to='/main'><h3>Get Shopping</h3></Link>
    </>
  );
}

export default Home;
