import React, { Component } from "react";
import "./styles/payment.css";
import PopUp from "./PopUp";
class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show:false
    }
  }
  
  componentDidMount() {
    document.getElementById("cash").disabled = true;
  }

  submit = () => {
    console.log(this.props);
    if (this.props.mode === "upi") {
      if (this.props.upi === "" || !this.props.upi.includes("@")) {
        return;
      }
    } else {
      if (
        this.props.card === "" ||
        this.props.card.length < 16 ||
        this.props.name === "" ||
        this.props.cvv.length !== 3 ||
        this.props.my.split("/")[0] < 1 ||
        this.props.my.split("/")[0] > 31 ||
        this.props.my.split("/")[1] < 1 ||
        this.props.my.split("/")[1] > 12
      ) {
        return;
      }
    }
    this.setState({
      show:true
    })
    
  };
  render() {
    return (

     
      <div class="main">
         {this.state.show?(<PopUp message="Successful !" />):null}
        <div className="payment-mode">
          <button name="credit" onClick={this.props.paymentMode}>
            Credit / Debit Card
          </button>
          <button name="upi" onClick={this.props.paymentMode}>
            UPI Payment
          </button>
          <button id="cash" name="cash" onClick={this.props.paymentMode}>
            COD
          </button>
        </div>
        <div className="payment">
          <div>
            {this.props.mode === "credit" ? (
              <img className="image" src="media/credit.jpg" alt="credit card" />
            ) : (
              <img className="image" src="media/upi.jpg" alt="upi" />
            )}
          </div>
          <div className="details">
            {this.props.mode === "credit" ? (
              <>
                <div>
                  <input
                    type="text"
                    placeholder="CARD NUMBER"
                    onChange={this.props.inputHandler}
                    name="card"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    onChange={this.props.inputHandler}
                    name="name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    onChange={this.props.inputHandler}
                    name="my"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    onChange={this.props.inputHandler}
                    name="cvv"
                  />
                </div>
              </>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="UPI ID"
                  onChange={this.props.inputHandler}
                  name="upi"
                />
              </div>
            )}
          </div>

          <span id="pay-btn" className="pay" onClick={this.submit}>
            PAY NOW
          </span>
        </div>
      </div>
    );
  }
}

export default Payment;
