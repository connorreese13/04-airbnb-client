import React from "react";
import "../styles/nav.css";

class Nav extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <a href="/" className="logo"></a>
        <div className="profile">
          <a href="/plus" className="button">
            <span>Airbnb Plus</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
