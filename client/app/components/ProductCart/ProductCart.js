import React from 'react'

class ProductCart extends React.Component {
   constructor(props) {
      super(props);
   }

   addToCart(product) {
      this.setState({ cart: cart.push(product) });
   }

   render() {
      let { cart } = this.props;
      if (!cart) {
         cart = [];
      }
      return (
         <div>
            <div><i className="fa fa-shopping-cart"></i> total items: {cart.length}</div>
         </div>
      );
   }
}

export default ProductCart;