import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/popUp.css";

function PopUp(props) {
  const changeHandler = () => {
    document.getElementById("backdrop").classList.toggle("visible");
    document.getElementById("add-modal").classList.toggle("visible");
  };
  return (
    <div>
      <div id="backdrop" className="visible" onClick={changeHandler}></div>
      <div className="modal visible" id="add-modal">
        <div className="modal__content">
          <p className="modal__title">{props.message}</p>
        </div>
        <div className="modal__actions">
          <NavLink className="navbar__links__li" exact to="/">
            <button className="btn btn--success" onClick={changeHandler}>
              Continue
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
