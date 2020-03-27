import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectBikesData } from "../../redux/bikes/bikes.selectors";

import "./bikes-menu.styles.scss";

class BikesMenu extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: 0
    };
  }

  handleSelect = id => {
    if (this.state.selectedOption === id) this.setState({ selectedOption: 0 });
    else this.setState({ selectedOption: id });
  };

  render() {
    const { bikesData } = this.props;
    const { selectedOption } = this.state;

    let optionClasses = "bikes-menu-secondLevel";
    let optionAddIconClasses = "bikes-menu-addIcon active-level";
    let optionSubIconClasses = "bikes-menu-subIcon";

    return (
      <div className="bikes-menu">
        <div className="bikes-menu-wrap">
          <p className="bikes-menu-title">SHORT CUTS</p>

          <div className="bikes-menu-group">
            <p className="bikes-menu-subTitle">CATEGORY</p>
            {Object.values(bikesData).map(category => (
              <div className="bikes-menu-itemWrap">
                <div
                  className="bikes-menu-primaryTextBox"
                  onClick={() => this.handleSelect(category.id)}
                >
                  {selectedOption === category.id ? (
                    <p className={`${optionSubIconClasses} active-level`}>-</p>
                  ) : (
                    <p className={optionAddIconClasses}>+</p>
                  )}
                  <p className="bikes-menu-text">{category.title}</p>
                </div>
                <div
                  className={
                    selectedOption === category.id
                      ? `${optionClasses} active-level`
                      : optionClasses
                  }
                >
                  {Object.values(category.items).map(item => (
                    <Link
                      to={`/${category.routeName}/${item.prettyId}`}
                      className="bikes-menu-secondaryText"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="bikes-menu-note">
            Bikes manufactured and sold by Specialized are guaranteed for
            quality and performance. We stand by our bikes and aim to produce
            the highest quality products. Our bikes are made for riders, by
            riders.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  bikesData: selectBikesData
});

export default connect(mapStateToProps)(BikesMenu);
