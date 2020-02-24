import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail.js";
import Nav from "./Nav.js";

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
        <Nav></Nav>
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
