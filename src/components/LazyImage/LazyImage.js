import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function LazyImage({ url, alt, placeholder }) {
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
    setImgSrc(placeholder);
  };

  return (
    <img
      src={imgSrc ? imgSrc : placeholder}
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
