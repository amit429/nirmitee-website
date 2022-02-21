import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://nirmitee-backend.herokuapp.com/user/login", {
        ...user,
      });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
    alert("Logged In");
  };
  return (
    <section className="login-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="login-form">
            <h3>!Welcome Back</h3>

            <form
              onSubmit={loginSubmit}
              style={{
                textAlign: "left",
              }}
            >
              <div className="form-group">
                <label>Email</label>
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
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  style={{
                    textAlign: "left",
                    alignItems: "left",
                  }}
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={onChangeInput}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <p>
                <Link to="/signup" className="pull-left">
                  Create a new account
                </Link>

                <Link to="#" className="pull-right">
                  ?Forgot your password
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// class Login extends React.Component {
//     state = {
//         email: '',
//         password: ''
//         //logged in
//     };

//     onSubmit = (e) => {
//         e.preventDefault();
//         //check login
//     }

//     render(){

//     }
// }

export default Login;
