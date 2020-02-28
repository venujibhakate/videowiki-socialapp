import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
var validEmailRe = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Register extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      email: "", password: "",
      errors: {
        Username: "",
        email: "",
        password: ""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  validateUsername = userName => {
    return userName && userName.length >= 5;
  };
  onChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    const newErros = { ...errors };
    switch (name) {
      case "Username":
        newErros.Username = this.validateUsername(value)
          ? ""
          : "Full Name must be 5 characters long!";
        break;
      case "email":
        newErros.email = validEmailRe.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        newErros.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({
      errors: newErros,
      [name]: value
    });
  };
  goToHome = () => {
    this.props.history.push("/login");
  };

  onSubmit = async e => {
    e.preventDefault();
    const newuser = {
      Username: this.state.Username,
      email: this.state.email,
      password: this.state.password
    };
    
    const response = await axios.post(
      "http://localhost:8000/register",
      newuser
    );
    if (response.errors === null) {
      console.log("komal");
    } else {
      this.goToHome();
    }
  };

  render() {
    const { email, Username, password } = this.state;
    console.log(this.state);

    const isEnabled =
      email.length > 0 && password.length > 0 && Username.length > 0;

    return (
      <div>
        <Navbar />
        <form noValidate onSubmit={this.onSubmit}>
          <div className="auth-wrapper" style={{ marginTop: "10%" }}>
            <div className="auth-inner">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  onChange={this.onChange}
                  name="Username"
                  value={this.state.Username}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div style={{ color: "red" }}>{this.state.errors.Username}</div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  onChange={this.onChange}
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div style={{ color: "red" }}>{this.state.errors.email}</div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={this.onChange}
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div style={{ color: "red" }}>{this.state.errors.password}</div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={!isEnabled}
                style={{ height: "40px", width: "90px" }}
              >
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered<Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
