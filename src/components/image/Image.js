import PropTypes from 'prop-types';
import React from 'react';

const Image = ({modifier, image }) => {
  return (
    <picture className={`image ${modifier ? modifier : ''}`}>
      <source srcSet={image.webp} type="image/webp" />
      <img className="image__src" src={image.src} loading="lazy" alt={image.alt ? image.alt : ""}/>
    </picture>
  );
}

Image.propTypes = {
  modfiers: PropTypes.string,
  image: PropTypes.object,
  alt: PropTypes.string
}

export default Image;
