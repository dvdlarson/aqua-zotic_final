import React, { Component } from 'react';
import 'whatwg-fetch';
import ProductForm from '../ProductForm/ProductForm';
import "../Style/Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.addProduct = this.addProduct.bind(this);
    // this.newCounter = this.newCounter.bind(this);
    // this.incrementCounter = this.incrementCounter.bind(this);
    // this.decrementCounter = this.decrementCounter.bind(this);
    // this.deleteCounter = this.deleteCounter.bind(this);

    // this._modifyCounter = this._modifyCounter.bind(this);
  }
  //get the products into the state object
  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        this.setState({
          products: json
        });
      });
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return (
        <li className="list-group-item" key={product.id}>
          {product.title}
        </li>
      )
    });
  }

  addProduct(formData) {

    fetch('/api/products', { method: 'POST', body: formData })
      .then(res => res.json())
      .then(json => {
        let data = this.state.products;
        data.push(json);

        this.setState({
          products: data
        });
      });
  }

  render() {
    return (
      <div className="admin">
        <p>Add New Product:</p>
        <ProductForm />
      </div>
    );
  }
}

export default Admin;
