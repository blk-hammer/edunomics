import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import glasses from "../resources/glasses.jpg";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
  renderContent() {
    return (
      <div
        className="container"
        style={{ position: "relative", paddingBottom: "200px" }}
      >
        <h2>Whatever Your Style, Travel Your Way</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tristique luctus mi ut tempus. Maecenas aliquam ultrices urna id
          eleifend. Maecenas tincidunt urna vitae augue commodo efficitur luctus
          sed nisi. Praesent volutpat augue metus, commodo ornare nisl maximus
          a.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget porttitor metus. In hac habitasse platea dictumst. Nullam ut enim
          eu ex accumsan commodo fermentum vel dui. Cras viverra nisi at odio
          pellentesque, vel consequat libero rutrum. Nullam id sapien fermentum,
          lacinia arcu non, posuere mauris. Phasellus diam quam, volutpat et
          finibus quis, molestie vel erat. Donec mollis nulla a purus iaculis
          sagittis.
        </p>
        <p>
          {" "}
          Quisque ut sapien eu purus dapibus luctus et non erat. Nulla facilisi.
          Quisque nec porta erat. Curabitur ut lobortis leo, nec sollicitudin
          ipsum. Curabitur tempus orci a sem ornare luctus. Aenean tempor neque
          tincidunt nisi convallis ultrices. Curabitur cursus, lectus in
          condimentum auctor, nisi mauris ornare lorem, vel interdum orci orci
          et turpis.{" "}
        </p>
        <p>
          Suspendisse magna est, laoreet eget gravida venenatis, suscipit sed
          ante. In ac ultricies lacus. Etiam eu felis bibendum purus condimentum
          eleifend. Morbi vitae risus orci. Vestibulum ut sagittis ligula, sit
          amet elementum nibh. Praesent suscipit hendrerit sem non sollicitudin.
          Quisque sit amet felis quis sem auctor euismod interdum eu ante. Nulla
          porta lacus sed risus molestie, vitae dapibus lacus pellentesque.
          Vestibulum sit amet viverra neque.
        </p>
        <p>
          Integer sit amet facilisis augue. Vestibulum accumsan mauris eget
          accumsan facilisis. Integer a lorem in mi eleifend mattis sit amet ut
          lorem. Quisque iaculis ut erat sit amet tempus. Sed porta eros mi, a
          ornare justo hendrerit vitae. Proin ipsum est, viverra in eros ac,
          suscipit aliquam mauris. Phasellus ac volutpat orci. In a lacus
          tincidunt, volutpat sem a, mollis dui. Donec finibus bibendum ipsum a
          sollicitudin. Aenean pellentesque euismod elit non rhoncus. Praesent
          iaculis varius congue. Suspendisse aliquam nisl et justo malesuada,
          nec lacinia arcu auctor.
        </p>
        <p>
          {" "}
          Suspendisse a ipsum auctor, porttitor nulla eget, congue tortor. Sed
          eleifend eros sit amet nunc imperdiet dictum. Sed a consequat mi. Ut
          accumsan est at ante lacinia consectetur. Suspendisse interdum
          faucibus mauris et luctus. Pellentesque consectetur lacus metus, a
          lacinia magna porta vitae. Nam molestie lectus nec lectus consectetur
          sodales. Etiam lobortis nulla et consequat mattis.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div style={{ paddingBottom: "2.5rem", height: "100vh" }}>
          <img
            style={{
              zIndex: "-1",
              position: "absolute",
              width: "100%",
              height: "90vh",
            }}
            src={glasses}
            alt="background"
          />
          <Header style={{ position: "absolute" }} />
        </div>
        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}
export default Home;
