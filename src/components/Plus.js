import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail.js";

class Favorites extends React.Component {
  state = {
    houses: []
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/houses?plus=true`)
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  houseHover = id => {
    console.log("I am a useless hover function");
  };
  render() {
    return (
      <>
        <nav>
          <a href="/" className="logo"></a>
          <div className="profile">
            <a href="/plus" className="button">
              <span>Airbnb Plus</span>
            </a>
          </div>
        </nav>
        <div className="narrow">
          <div className="grid four large">
            {// List of thumbnails
            this.state.houses.map((house, index) => (
              <Thumbnail x={house} key={index} onHouseHover={this.houseHover} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
