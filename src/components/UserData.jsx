import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/user.css";
import PopUp from "./PopUp";

class UserData extends Component {
  componentDidMount() {
    const btn = document.getElementById("btn");
    btn.disabled = true;
    document.getElementById("username").textContent = "";
    document.getElementById("address").textContent = "";
  }

  componentDidUpdate() {
    const btn = document.getElementById("btn");
    if (this.props.username === "" || this.props.address === "") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }
  render() {
    return (
      <div className="user-details">
        <PopUp message="Welcome User ! " />
        <div>
          <input
            id="username"
            type="text"
            value={this.props.username}
            name="username"
            placeholder="Username"
            onChange={this.props.inputHandler}
          />
        </div>
        <div>
          <input
            type="text"
            id="address"
            value={this.props.address}
            name="address"
            placeholder="Address"
            onChange={this.props.inputHandler}
          />
        </div>
        <NavLink className="navbar__links__li" exact to="/credit">
          <button id="btn" onClick={this.details}>
            Proceed
          </button>
        </NavLink>
      </div>
    );
  }
}

export default UserData;
