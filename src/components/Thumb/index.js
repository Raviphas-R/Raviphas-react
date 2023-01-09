import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {/* Check clickable is True? */}
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  movieId: Proptypes.number,
  image: Proptypes.string,
  clickable: Proptypes.bool,
};
export default Thumb;
