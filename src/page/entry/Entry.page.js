import React, { useState } from "react";

import "./entry.style.css";
import LoginForm from "../../components/login/Login.comp";
import PasswordReset from "../../components/password_reset/PasswordReset.comp";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(password);
        break;
      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //TODO call api to submit the form
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    //TODO call  api to  reset password
  };
  return (
    <div className=" entry-page bg-info">
      <div className="custom-jumbotron form-box">
        {frmLoad === "login" && (
          <LoginForm
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === "reset" && (
          <PasswordReset
            handleOnchange={handleOnchange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
