import React from "react";

class Reviews extends React.Component {
  state = {};
  render() {
    return (
      <div className="reviews">
        <h2>
          {`${this.props.review.length} `}
          Reviews
        </h2>
        {this.props.review.map((review, i) => {
          return (
            <div className="card review" key={i}>
              <div className="content">
                <div className="user">
                  <div className="avatar"></div>
                  <div className="name">
                    <span>{review.author.name}</span>
                    <small>{review.author.location}</small>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>{review.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reviews;
