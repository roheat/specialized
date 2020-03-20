import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            name="password"
            value={password}
            required
            onChange={this.handleChange}
          />
          <label>Email</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
