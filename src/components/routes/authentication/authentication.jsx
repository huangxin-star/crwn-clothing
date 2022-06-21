import React from "react";
import SignUpForm from "../sign-up-form/sign-up-form";
import SignInForm from "../sign-in-form/sign-in-form";
import "./authentication.scss";
export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
}
