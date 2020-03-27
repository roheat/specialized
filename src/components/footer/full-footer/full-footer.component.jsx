import React from "react";
import "./full-footer.styles.scss";

export default function FullFooter() {
  return (
    <div className="full-footer">
      <div className="full-footer-wrapper">
        <div className="full-footer-left">
          <form className="full-footer-form">
            <input
              className="full-footer-formInput"
              type="email"
              name="email"
              placeholder="Join Our Newsletter"
            ></input>
            <button type="submit" className="full-footer-formSubmit">
              JOIN
            </button>
          </form>
          <p className="full-footer-left-text">
            By submitting your email address you agree to the{" "}
          </p>
          <p className="full-footer-left-text full-footer-terms">
            Terms & Conditions
          </p>
        </div>
        <div className="full-footer-center">
          <p className="full-footer-centerText">Contact Us</p>
          <p className="full-footer-centerText">FAQ's</p>
          <p className="full-footer-centerText">Returns</p>
          <p className="full-footer-centerText">Warranty</p>
          <p className="full-footer-centerText">Test The Best</p>
          <p className="full-footer-centerText">Bicycle Registration</p>
          <p className="full-footer-centerText">Safety Notifications</p>
          <p className="full-footer-centerText">Terms of Use</p>
          <p className="full-footer-centerText">Counterfeit Awareness</p>
          <p className="full-footer-centerText">Careers</p>
        </div>
        <div className="full-footer-right">
          <a
            href="https://www.specialized.com/de/en/store-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="full-footer-right-retailerButton"
          >
            FIND A RETAILER
          </a>
          <div className="full-footer-socialTags">
            <div className="full-footer-socialTag full-footer-socialTag1"></div>
            <div className="full-footer-socialTag full-footer-socialTag2"></div>
            <div className="full-footer-socialTag full-footer-socialTag3"></div>
            <div className="full-footer-socialTag full-footer-socialTag4"></div>
          </div>
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
