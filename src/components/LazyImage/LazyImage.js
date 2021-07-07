import React, { useState, useEffect } from "react";
import placeholderImage from "../../assets/images/placeholder_image.png";
import PropTypes from "prop-types";

function LazyImage({ url, alt }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = url;

    imageLoader.onload = () => {
      setImgSrc(url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleError = () => {
    setImgSrc(placeholderImage);
  };

  return (
    <img
      src={imgSrc ? imgSrc : placeholderImage}
      className=""
      alt={alt}
      onError={handleError}
    />
  );
}

LazyImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

LazyImage.defaultProps = {
  alt: "Image",
};

export default LazyImage;
