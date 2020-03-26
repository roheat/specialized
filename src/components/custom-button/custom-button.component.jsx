import React from "react";

import "./custom-button.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  red,
  ...otherProps
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } ${red ? "red" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
