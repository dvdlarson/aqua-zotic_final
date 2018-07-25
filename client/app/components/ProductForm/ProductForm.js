import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './ProductForm.css';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '',
      name: '',
      category: 'General',
      description: '',
      cost: 0.00,
      price: 0.00,
      qty_on_hand: 0,
      is_active: false,
      image_data: ''
    };

  }

  getFormData = (object) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

  previewFile = () => {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    let me = this;
    reader.addEventListener("load", () => me.setState({ image_data: reader.result }), false)

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //this.props.history.push('/admin');
    const data = this.getFormData(this.state);
    let me = this;
    fetch('/api/products', {
      method: 'POST',
      body: data
    }).then(() => {
      me.refs.form.reset();
      me.setState({
        sku: '',
        name: '',
        category: 'General',
        description: '',
        cost: 0.00,
        price: 0.00,
        qty_on_hand: 0,
        is_active: false,
        image_data: ''
      })
    }).catch(err => console.log(err));
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    let product = this.state;
    const categories = ['Freshwater', 'Saltwater', 'Dry_Goods']
    let optionItems = categories.map((category) =>
      <option key={category}>{category}</option>
    );
    return (
      <div className="card productCard col-sm-3">
        <form onSubmit={this.handleSubmit} ref="form">
          <div className="form-group">
            <label htmlFor="file">Thumbnail</label>
            <input type="file" name="file" className="form-control" accept="image/*" onChange={this.previewFile} />
            <img style={{ maxWidth: '25%', display: 'flex', alignSelf: 'center' }} src={product.image_data} />
          </div>
          <div className="form-group">
            <label htmlFor="product_code">Category</label>
            <select className="form-control" name="category" onChange={this.handleInputChange}> {optionItems} </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">SKU</label>
            <input type="text" className="form-control" name="sku" autoComplete="off" value={product.sku} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Name</label>
            <input type="text" className="form-control" name="name" autoComplete="off" value={product.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" name="description" autoComplete="off" value={product.description} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost</label>
            <input type="number" className="form-control" name="cost" autoComplete="off" value={product.cost} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" name="price" autoComplete="off" value={product.price} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="qty_on_hand">QTY</label>
            <input type="number" className="form-control" name="qty_on_hand" autoComplete="off" value={product.qty_on_hand} onChange={this.handleChange} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" name="is_active" value={product.is_active} onChange={this.handleChange} />
            <label className="form-check-label" htmlFor="is_active">Active</label>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}



export default withRouter(ProductForm);