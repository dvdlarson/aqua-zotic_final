import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
   constructor(props) {
      super(props);
      this.state = {
         ...props
      }
   }

   render() {
      const product = this.state;
      let cardImg = product.image_data === 'http://localhost:8080/admin' || !product.image_data ? 'd-none' : 'card-img-top';
      return (
         <div className="card productCard col-sm-3">
            <div className="form-group">
               <label htmlFor="file">Thumbnail</label>
               <img style={{ maxWidth: '25%', display: 'flex', alignSelf: 'center' }} src={product.image_data} />
            </div>
            <div className="form-group">
               <label htmlFor="product_code">Category</label>
               <div className="form-control" name="category" >{product.category}</div>
            </div>
            <div className="form-group">
               <label htmlFor="sku">SKU</label>
               <div className="form-control" name="sku" >{product.sku}</div>
            </div>
            <div className="form-group">
               <label htmlFor="category">Name</label>
               <div className="form-control" name="name" >{product.name}</div>
            </div>
            <div className="form-group">
               <label htmlFor="description">Description</label>
               <div className="form-control" name="description" >{product.description}</div>
            </div>
            <div className="form-group">
               <label htmlFor="cost">Cost</label>
               <div className="form-control" name="description" >{product.cost}</div>
            </div>
            <div className="form-group">
               <label htmlFor="price">Price</label>
               <div className="form-control" name="price" >{product.price}</div>
            </div>
            <div className="form-group">
               <label htmlFor="qty_on_hand">QTY</label>
               <div className="form-control" name="qty_on_hand" >{product.qty_on_hand}</div>
            </div>
            <div className="form-group form-check">
               <input type="checkbox" className="form-check-input" name="is_active" value={product.is_active} disabled={true} />
               <label className="form-check-label" htmlFor="is_active">Active</label>
            </div>
         </div>
      );
   }
}
export default Product;