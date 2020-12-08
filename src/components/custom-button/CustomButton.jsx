import React from "react"
import "./CustomButton.scss"

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <div className={`${inverted ? "google-sign-in" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </div>
)

export default CustomButton
