import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobileno: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://nirmitee-backend.herokuapp.com/user/register", {
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
            <h3>Create your Account</h3>

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
                  value={user.name}
                  onChange={onChangeInput}
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
                />
              </div>

              <div className="form-group">
                <label
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  style={{
                    textAlign: "left",
                  }}
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={onChangeInput}
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
                  name="mobileno"
                  style={{
                    textAlign: "left",
                  }}
                  className="form-control"
                  placeholder="Number"
                  value={user.mobileno}
                  onChange={onChangeInput}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>

              <p>
                <Link to="/login">!Login</Link> ?Already a registered user{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
