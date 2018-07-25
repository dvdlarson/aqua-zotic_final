import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './ProductCard.css';

class ProductCard extends Component {
   constructor(props) {
      super(props);
      this.state = props;
   }

   addToCart = () => {
      this.props.addToCart(this.state);
   }

   render() {
      let product = this.state;
      return (
         <div className="productCard">
            <div className="top">
               <img className="thumb" src={product.image_data} />
               <div className="bod">{product.description}</div>
            </div>

            <button className="btn btn-sm myb" onClick={this.addToCart}><i className="fa fa-cart-plus"></i></button>
         </div>
      );
   }
}



export default withRouter(ProductCard);