import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import UserData from "./components/UserData";
import Payment from "./components/Payment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "credit",
      card: "",
      name: "",
      cvv: 0,
      my: "",
      upi: "",
      username: "",
      address: "",
    };
  }


  paymentMode = (e) => {
    this.setState({
      mode: e.target.name,
    });
  };
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <UserData
              username={this.state.username}
              address={this.state.address}
              inputHandler={this.inputHandler}
            />
          )}
        />
        <Route
          path="/credit"
          render={(props) => (
            <Payment
              mode={this.state.mode}
              card={this.state.card}
              name={this.state.name}
              cvv={this.state.cvv}
              my={this.state.my}
              upi={this.state.upi}
              paymentMode={this.paymentMode}
              inputHandler={this.inputHandler}
            />
          )}
        />
      </Switch>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
