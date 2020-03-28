import React from "react";

import "./custom-button.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  red,
  disabled,
  ...otherProps
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } ${red ? "red" : ""} ${disabled ? "disabled" : ""} custom-button`}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
