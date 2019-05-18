import React, { Component } from "react";

export default class ImageCard extends Component {
  render() {
    const { alt_description, urls } = this.props.imageprop;
    return (
      <div>
        <img alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}
