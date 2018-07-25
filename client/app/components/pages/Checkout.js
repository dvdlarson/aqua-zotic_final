import React from 'react';
import "../Style/Checkout.css";

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      claims: {
        address: {
          street_address: "",
        }
      }
    }
  }

  componentDidMount() {
    const myClaims = JSON.parse(localStorage.getItem('user'));
    if (!myClaims)
      this.props.history.push("/login");

    let c = Object.assign(this.state.claims, myClaims);
    this.setState({
      claims: c
    }, () => {
      this.populateCart();
    });
  }

  populateCart = () => {
    let cached = localStorage.getItem('cart');
    if (!cached)
      cached = "[]";

    let cachedCard = JSON.parse(cached);

    this.setState({ cart: cachedCard });
  }

  render() {
    let { claims, cart } = this.state;
    return (
      <div className="container">
        <h2>Your Checkout</h2>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">{cart.length}</span>
            </h4>

            <div>
              <ul>
                {
                  cart.map((product, i) => {
                    return (
                      <li key={i} className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 className="my-0">{product.name}</h6>
                          <small className="text-muted">{product.description}</small>
                        </div>
                        <span className="text-muted">{product.price}</span>
                      </li>);
                  })
                }
              </ul>
            </div>


            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code">
                </input>
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="">
              <div className="mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" value={claims.given_name} required>
                </input>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" value={claims.family_name} required>
                </input>
              </div>
              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" id="username" value={claims.email} required>
                  </input>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" value={claims.address.street_address} required>
                </input>
              </div>
              <div className="mb-3">
                <label htmlFor="state">City</label>
                <input type="text" className="form-control" id="stage" value={claims.address.locality} required></input>
              </div>
              <div className="mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="stage" value={claims.address.postal_code} required>
                </input>
              </div>
              <hr className="mb-4"></hr>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address"></input>
                <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                <br></br>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info"></input>
                <br></br>
                <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                <br></br>
              </div>
              <hr className="mb-4"></hr>
              <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="">
                  </input>
                  <label className="custom-control-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="">
                  </input>
                  <label className="custom-control-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="">
                  </input>
                  <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required="">
                  </input>
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required="">
                </input>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="">
                </input>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
              <hr className="mb-4"></hr>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Submit Your Order</button>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    );
  }
}