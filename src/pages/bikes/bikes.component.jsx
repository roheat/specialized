import React from "react";

// import BIKES_DATA from './bikes.data.js';
import BikesHero from "../../components/bikes-hero/bikes-hero.component";
import BikesContent from "../../components/bikes-content/bikes-content.component";

import "./bikes.styles.scss";

class Bikes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: []
    };
  }

  render() {
    return (
      <div className="ProductPageBikes">
        <div className="ProductPage-Header">
          <div className="ProductPage-HeaderInner">
            <p className="ProductPage-HeaderTitle">SHOP/BIKES</p>
          </div>
        </div>

        <div className="ProductPageBikes-Wrap">
          <BikesHero />

          <BikesContent />
        </div>
      </div>
    );
  }
}

export default Bikes;
