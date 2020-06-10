import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./list.css";
import history from "../history";

class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.location = this.props.location;
    this.state = {
      title: "welcome to edunomics",
      isLoggedIn: false,
    };
  }

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  componentDidMount() {
    if (this.location.state)
      this.setState({ isLoggedIn: this.location.state.loggedIn });
  }

  render() {
    if (this.state.isLoggedIn)
      return (
        <div>
          {/* header */}
          <div
            className="ui secondary pointing menu"
            style={{
              top: "0",
              margin: "0",
              borderBottom: "0",
            }}
          >
            <p className="item">{this.state.title}</p>
            <div className="right menu">
              <NavDropdown
                className="item"
                title="My account"
                id="nav-dropdown"
                style={{ padding: "4px" }}
              >
                <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    this.logout();
                    history.push({
                      pathname: "/",
                    });
                  }}
                >
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          {/* side nav */}
          <nav
            style={{
              float: "left",
              width: "30%",
              minHeight: "100vh",
              background: "#ccc",
              padding: "20px",
            }}
          >
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="/platform">Home</Link>
              </li>
              <li>
                <Link to="/sessions">Sessions</Link>
              </li>
              <li>
                <Link to="/downloads">Downloads</Link>
              </li>
              <li>
                <Link to="/setting">Settings</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          {/* main content */}
          <div className="content">helllo</div>

          {/* footer */}
          <footer
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              width: "70%",
              backgroundColor: "#777",
              marginBottom: "-40px",
              padding: "10px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Card style={{ width: "40%", display: "inline-block" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "left",
                    color: "black",
                    opacity: "0.7",
                    borderBottom: "1px solid grey",
                  }}
                >
                  Topics covered
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                marginLeft: "10%",
                width: "40%",
                display: "inline-block",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "left",
                    color: "black",
                    opacity: "0.7",
                    borderBottom: "1px solid grey",
                  }}
                >
                  Recent Activites
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "80%", margin: "20px auto" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "left",
                    color: "black",
                    opacity: "0.7",
                    borderBottom: "1px solid grey",
                  }}
                >
                  Performance
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <b>Edunomics</b>
            <p>contact@edunomics.in</p>
          </footer>
        </div>
      );
    return "please sign in";
  }
}
export default Platform;
