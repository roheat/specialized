import React from "react";
import "./mobile-footer.styles.scss";

export default function MobileFooter() {
  const HandleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="mobile-footer">
      <div className="mobile-footer-wrapper">
        <div className="mobile-footer-top">
          <form className="mobile-footer-form" onSubmit={HandleSubmit}>
            <input
              className="mobile-footer-formInput"
              type="email"
              name="email"
              placeholder="Join Our Newsletter"
            ></input>
            <button type="submit" className="mobile-footer-formSubmit">
              JOIN
            </button>
          </form>
          <p className="mobile-footer-left-text">
            By submitting your email address you agree to the{" "}
          </p>
          <p className="mobile-footer-left-text mobile-footer-terms">
            Terms & Conditions
          </p>
        </div>

        <div className="mobile-footer-middle">
          <a
            href="https://www.specialized.com/de/en/store-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-footer-right-retailerButton"
          >
            FIND A RETAILER
          </a>
          <div className="mobile-footer-socialTags">
            <div className="full-footer-socialTag full-footer-socialTag1"></div>
            <div className="full-footer-socialTag full-footer-socialTag2"></div>
            <div className="full-footer-socialTag full-footer-socialTag3"></div>
            <div className="full-footer-socialTag full-footer-socialTag4"></div>
          </div>
        </div>

        <div className="mobile-footer-bottom">
          <p className="mobile-footer-centerText">Contact Us</p>
          <p className="mobile-footer-centerText">FAQ's</p>
          <p className="mobile-footer-centerText">Returns</p>
          <p className="mobile-footer-centerText">Warranty</p>
          <p className="mobile-footer-centerText">Test The Best</p>
          <p className="mobile-footer-centerText">Bicycle Registration</p>
          <p className="mobile-footer-centerText">Safety Notifications</p>
          <p className="mobile-footer-centerText">Terms of Use</p>
          <p className="mobile-footer-centerText">Counterfeit Awareness</p>
          <p className="mobile-footer-centerText">Careers</p>
        </div>

        <div className="full-footer-copyRightsWrap">
          <p className="full-footer-made-by">
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>
            by{" "}
            <a
              href="https://github.com/roheat"
              rel="noopener noreferrer"
              target="_blank"
            >
              roheat
            </a>
          </p>
          <div className="full-footer-copyRightsTop">
            <p className="full-footer-copyRights-text">Privacy Policy</p>
            <p className="full-footer-copyRights-text">
              California Transparency Act
            </p>
          </div>
          <p className="full-footer-copyRights-bottom">
            © 2019. Specialized Bicycle Components. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
