import React, { Component } from "react";
import { Player } from 'video-react';
import Header from '../Header/Header';
import "../Style/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      formIsVisible: false
    };


    //this.addProduct = this.addProduct.bind(this);
  }

  render() {
    return (

      <div className="home">
        <Header />

        {/* <div className="container"> */}
        <div className="row">
          <div className="col-6">
            <iframe width="100%" height="480" src="https://www.youtube.com/embed/_oCSnrGYc9s?autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div className="col-6">
            <div>
              <br />
              <img src="https://brightonhoveprinters.co.uk/wp-content/uploads/2017/03/10off.jpg " width="300" height="200" alt="Internet" />
              <img src="http://darushsholihin.com/wp-content/uploads/2013/01/shipping-truck-icon.jpg" width="300" height="200" alt="Internet" />
            </div>
            <br />
            <img src=" http://seaa.rwsentosablog.com/wp-content/uploads/2017/03/salinity.png" width="300" height="200" alt="Internet" />
            <img src="http://www.saintlouisaquariums.com/images/da_promo2.jpg" width="300" height="200" alt="Internet" />
            <br />
            <div>

            </div>
          </div>
        </div>
        {/* <h1>Header </h1> */}
        <br />
        <div className="row">

          <div className="col-4">
            <img src="http://www.wilcoxandsonauto.com/wp-content/uploads/2015/05/Ribbon-Family-Owned.jpg" width="300" height="200" alt="Internet" />

          </div>
          <div className="col-4">
            <img src="  http://www.robesoncountysw.org/images/Site-Sign_ho.jpg" width="300" height="200" alt="Internet" />

          </div>

          <div className="col-4">
            <img src="http://www.developmentnews.in/wp-content/uploads/2017/06/Overall-1.jpg" width="300" height="200" alt="Internet" />

          </div>



          {/* <div className="row">
            <div className="col-6">
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex.</h3>
            </div>
            <div className="col-6">
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex.</h3>
            </div>
          </div> */}
          <div>



          </div>
        </div>
        {/* </div> */}
      </div>
      // </div>
    );
  }
}
export default Home;
