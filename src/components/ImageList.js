import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  // images is an array from the axios response
  // for each item in this array we want to return a img
  // images = response.data.results (app.js)
  // destructuring the props

  // passing the images thru a prop to the card so the ImageCard can access the images url
  const images = props.images.map(image => {
    return <ImageCard key={image.id} imageprop={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
