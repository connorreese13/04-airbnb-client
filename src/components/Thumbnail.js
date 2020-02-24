import React from "react";

class Thumbnail extends React.Component {
  state = {};
  componentWillReceiveProps(nextProp) {
    this.props = nextProp.props;
  }
  render() {
    return (
      <a
        className="card link"
        href={`/houses/${this.props.x._id}`}
        key={this.props.x._id}
        onMouseOver={() => this.props.onHouseHover(this.props.x._id)}
      >
        <div
          className="image"
          style={{ backgroundImage: `url(${this.props.x.image})` }}
        ></div>
        <div className="content">
          <small className="meta">
            {this.props.x.type.name} • {this.props.x.bedrooms} Bedrooms
          </small>
          <h2>{this.props.x.title}</h2>
          <small className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>
              {this.props.x.city}, {this.props.x.region}
            </span>
          </small>
          <span className="price">${this.props.x.price}/night</span>
          <span className="rating">
            {[...Array(this.props.x.rating)].map((e, index) => {
              return <i key={index} className="fas fa-star"></i>;
            })}
            {[...Array(5 - this.props.x.rating)].map((e, index) => {
              return <i key={index} className="far fa-star"></i>;
            })}
          </span>
        </div>
      </a>
    );
  }
}

export default Thumbnail;
