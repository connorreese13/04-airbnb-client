import React from "react";

class Gallery extends React.Component {
  state = {
    images: [],
    selectedImage: this.props.x[0]
  };

  componentGetProps(props) {
    this.setState({ images: props.x });
    this.setState({ selectedImage: this.props.x[0] });
  }

  componentDidMount() {
    console.log(this.props.x);
  }

  selectImage = e => {
    console.log(e);
    this.setState({ selectedImage: e });
  };

  render() {
    return (
      <div className="gallery">
        <div
          className="image-main"
          style={{ backgroundImage: `url(${this.state.selectedImage})` }}
        ></div>
        <div className="previews">
          {this.props.x.map((x, i) => (
            <div
              className="preview"
              style={{ backgroundImage: `url(${x})` }}
              key={i}
              onClick={() => this.selectImage(x)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
