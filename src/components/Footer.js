import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        right: "0",
        bottom: "0",
        left: "0",
        marginTop: "50px",
        width: "100%",
        backgroundColor: "#777",
        padding: "10px",
        textAlign: "center",
        color: "white",
      }}
    >
      <span>Edunomics</span>
      <p>contact@edunomics.in</p>
      <span>
        <i class="facebook f icon" />
        <i class="twitter icon" />
        <i class="instagram icon" />
      </span>
      <div>
        <Link to="#">Join Us</Link> |<Link to="#">Cookie Policy</Link> |
        <Link to="#">Terms of Use</Link> |<Link to="#">Tech</Link> |
        <Link to="#">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
