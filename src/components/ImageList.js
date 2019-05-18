import React from "react";

const ImageList = props => {
  // images is an array from the axios response
  // for each item in this array we want to return a img
  // images = response.data.results (app.js)
  // destructuring the props
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
