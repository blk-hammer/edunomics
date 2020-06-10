import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import SigninForm from "./_signinForm";

const onSubmit = (values) => {
  console.log(values);
};

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ top: "0", marginTop: "0", borderBottom: "0" }}
    >
      <Link to="/" className="item">
        Welcome to Edunomics
      </Link>
      <div className="right menu">
        <NavDropdown
          className="item"
          title="Sign In"
          id="nav-dropdown"
          style={{ padding: "4px" }}
        >
          <SigninForm onSubmit={onSubmit} />
        </NavDropdown>
        <Link to="/signup" className="item">
          SignUp
        </Link>
      </div>
    </div>
  );
};
export default Header;
