import React, { Component } from 'react';
import 'whatwg-fetch';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import ProductCart from '../ProductCart/ProductCart';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: []
        };

    }

    componentDidMount() {
        let me = this;
        fetch('/api/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json,
                    cart: []
                }, () => {
                    me.populateCart();
                });
            });
    }

    addToCart = (product) => {

        var joined = this.state.cart.concat(product);
        this.setState({ cart: joined });
        localStorage.setItem("cart", JSON.stringify(joined));
    }

    clearCart = () => {
        this.setState({ cart: [] });
        localStorage.setItem("cart", JSON.stringify([]));
    }

    populateCart = () => {
        let cached = localStorage.getItem('cart');
        if (!cached)
            cached = "[]";

        let cachedCard = JSON.parse(cached);

        this.setState({ cart: cachedCard });
    }

    render() {
        const { products, cart } = this.state;
        return (
            <div>
                <div className='cart-contain'>
                    <div className='cart'>
                        <ProductCart cart={cart} />
                    </div>
                    <button className='c-clear btn btn-sm'>
                        <i className='c-clear fa fa-times-circle' onClick={this.clearCart}></i>
                        clear
                    </button>
                </div>
                <div className="row productList">
                    {
                        products.map((product, i) => {
                            return <ProductCard key={i} addToCart={this.addToCart} {...product}></ProductCard>;
                        })
                    }
                </div>
            </div>);

    }
}

export default ProductList; 