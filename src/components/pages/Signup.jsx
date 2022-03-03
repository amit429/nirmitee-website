import React from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { FormControl,Form } from 'react-bootstrap';

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    event: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://nirmitee-backend.herokuapp.com/user/payment", {
        ...user,
      });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <section className="signup-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="signup-form">
            <h3>Enter Your Registration Details</h3>

            <form
              onSubmit={registerSubmit}
              style={{
                textAlign: "left",
              }}
            >
              <div className="form-group">
                <label
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Name"
                  style={{
                    textAlign: "left",
                  }}
                  value={user.username}
                  onChange={onChangeInput}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  style={{
                    textAlign: "left",
                  }}
                  className="form-control"
                  placeholder="Email Address"
                  value={user.email}
                  onChange={onChangeInput}
                  autoComplete="on"
                />
              </div>

              <div className="form-group">
                <label
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  .Mobile No
                </label>
                <input
                  type="text"
                  name="mobile"
                  style={{
                    textAlign: "left",
                  }}
                  className="form-control"
                  placeholder="Number"
                  value={user.mobile}
                  onChange={onChangeInput}
                />
              </div>

              <div className="form-group">
                <select
                  id="cars"
                  name="event"
                  style={{
                    marginLeft: "30px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                  value={user.event}
                  onChange={onChangeInput}
                >
                  <option value="Default">Select Event</option>
                  <option value="Event 1">event 1</option>
                  <option value="Event 2">event 2</option>
                  <option value="Event 3">event 3</option>
                  <option value="Event 4">event 4</option>
                </select>
                <label
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  : Registered Event Name
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Save Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
