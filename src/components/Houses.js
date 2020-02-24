import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleMap from "google-map-react";
import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/maps.css";
import "../styles/nav.css";
import Thumbnail from "./Thumbnail.js";
import Pin from "./Pin.js";
import Nav from "./Nav.js";

class Houses extends React.Component {
  state = {
    houses: [],
    filteredHouses: [],
    types: [],
    map: {
      key: {
        key: "AIzaSyBKMVj4gaJLU9GTV1zOaWQj7ggKVbXQep0"
      },
      center: {
        lat: -8.652,
        lng: 115.137
      },
      zoom: 14
    }
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/houses`)
      .then(res => {
        this.setState({
          houses: res.data,
          filteredHouses: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  search = e => {
    this.setState({
      filteredHouses: this.state.houses.filter(house => {
        return (
          house.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          house.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
          house.region.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    });
  };

  houseHover = id => {
    let houses = this.state.houses;
    houses.map(e => {
      e.selected = false;
      return e;
    });
    let house = houses.find(e => e._id == id);
    house.selected = true;
    this.setState({ houses });
  };
  render() {
    return (
      <>
        <Nav></Nav>
        <div className="filters">
          <select>
            <option value="">Min Bedrooms: 1</option>
          </select>
          <select>
            <option value="">All Types</option>
          </select>
          <input type="number" placeholder="max price" />
          <select>
            <option value="price">Lowest Price</option>
            <option value="rating">Highest Rating</option>
          </select>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={this.search}
          />
        </div>
        <div className="grid map">
          <div className="grid four large">
            {// List of thumbnails
            this.state.filteredHouses.map((house, index) => (
              <Thumbnail x={house} key={index} onHouseHover={this.houseHover} />
            ))}
            ;
          </div>
          <div className="map">
            <GoogleMap
              bootstrapURLKeys={this.state.map.key}
              center={this.state.map.center}
              zoom={this.state.map.zoom}
            >
              {// List of Pins
              this.state.houses.map((house, index) => (
                <Pin
                  lat={house.lat}
                  lng={house.lng}
                  house={house}
                  key={index}
                />
              ))}
            </GoogleMap>
          </div>
        </div>
      </>
    );
  }
}

export default Houses;
