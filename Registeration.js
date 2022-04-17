import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("rcEmail", JSON.stringify(email));
      localStorage.setItem(
        "rcPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Create a new account</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
                <br></br>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password" minlength="8"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>Enter your gender</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                > 
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others/Prefer Not to Say</option>
                  
                </Form.Control>
              </div>
              <br></br>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered?{" "}Log In here
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  All fields are mandatory!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;